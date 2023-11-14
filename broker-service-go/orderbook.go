package main

import (
	"encoding/json"
	"fmt"
	"log"
	// "os"
	"sort"
	"strconv"
	"sync"

	"code.vegaprotocol.io/vega/protos/vega"
	eventspb "code.vegaprotocol.io/vega/protos/vega/events/v1"
	"github.com/jackc/pgtype"
	"github.com/shopspring/decimal"
)

// type snapshotPriceLevel struct {
// 	price            decimal.Decimal
// 	volume           decimal.Decimal
// 	cumulativeVolume decimal.Decimal
// }

type snapshotPriceLevel struct {
	Price            string `json:"price"`
	Volume           string `json:"volume"`
	CumulativeVolume string `json:"cumulativeVolume"`
}

type orderBookSnapshot struct {
	height    uint64
	timestamp int64
	marketId  string
	buys      []*snapshotPriceLevel
	sells     []*snapshotPriceLevel
}

type priceLevel struct {
	Price  decimal.Decimal `json:"price"`
	Orders []*vega.Order   `json:"orders"`
	Volume decimal.Decimal `json:"volume"`
	// hiddenVolume decimal.Decimal
}

type orderBookSide struct {
	Side   vega.Side     `json:"side"`
	Levels []*priceLevel `json:"levels"`
}

type orderBook struct {
	MarketId string                 `json:"marketId"`
	Orders   map[string]*vega.Order `json:"orders"`
	Buys     *orderBookSide         `json:"sells"`
	Sells    *orderBookSide         `json:"buys"`
}

type OrderProcessor interface {
	Initialize()
	ProcessOrder(*vega.Order)
	ProcessExpiredOrders(*eventspb.ExpiredOrders)
	RegisterNewMarket(string) *orderBook
	GetOrderBookSnapshots(*eventspb.EndBlock) map[string]*orderBookSnapshot
	TakeStateSnapshot(*eventspb.CoreSnapshotData)
}

type orderProcessor struct {
	OrderBooks             map[string]*orderBook `json:"orderBooks"`
	RecentBlocks           *blockMap             `json:"recentBlocks"`
	currentHeight          uint64
	lastCompletedHeight    uint64
	stateSnapshotPersistCh chan *orderProcessorStateSnapshot
	pgClient               *pgClient
}

func newOrderProcessor(persistCh chan *orderProcessorStateSnapshot, pgClient *pgClient) OrderProcessor {
	return &orderProcessor{
		OrderBooks: map[string]*orderBook{},
		RecentBlocks: &blockMap{
			mu: sync.RWMutex{},
			M:  map[string]*recentBlock{},
		},
		stateSnapshotPersistCh: persistCh,
		pgClient:               pgClient,
	}
}

func (op *orderProcessor) Initialize() {

	// Initialize will check the db for recent orderProcessor state snapshots, load the most recent one,
	// and then notify the vega node pod that it must load a Vega Core snapshot from the same height. For
	// this to work we will need a new process to run either as the entrypoint to our vega node container
	// or to run as part of the init container for the Vega node pod.

	// Count records in order processor state snapshots table. If 0 continue with fresh state in order processor

	// For now let's just hardcode the snapshot height that we want.
	// snapshotRestoreHeight := 916800
	// snapshotRestoreHeight := 923400

	// queryStr := `
	// SELECT
	// 	*
	// FROM order_processor_state_snapshots
	// WHERE height = $1
	// ORDER BY height DESC
	// LIMIT 1;
	// `

	// rows, err := op.pgClient.Query(queryStr, snapshotRestoreHeight)
	// if err != nil {
	// 	log.Fatalf("Failed to get recent order processor state snapshot from database: %v", err)
	// }

	// Alternatively we can just fetch the most recent state snapshot from the db, load it. Then ignore order
	// events from any height prior to and including the height of the snapshot. This will require the vega
	// node to load from a snapshot prior to the height of the most recent order processor snapshot.

	queryStr := `
	SELECT
		*
	FROM order_processor_state_snapshots
	ORDER BY height DESC
	LIMIT 1;
	`

	rows, err := op.pgClient.Query(queryStr)
	if err != nil {
		log.Fatalf("Failed to get recent order processor state snapshot from database: %v", err)
	}

	fmt.Printf("Order Processor Snapshot rows: %+v\n", rows)

	// var values []interface{}

	var height uint64
	var timestamp int64
	for rows.Next() {

		err = rows.Scan(&height, &timestamp, &op.OrderBooks, &op.RecentBlocks.M)
		if err != nil {
			log.Printf("Error scanning row values for order processor state snapshot: %v", err)
		}

		op.currentHeight = height
		op.lastCompletedHeight = height

		// log.Printf("Scanned row values.\n Height: %v.\n Timestamp: %v.\n Orderbooks: %v\n OrderProcessor recent blocks map: %v.\n", height, timestamp, op.OrderBooks, op.RecentBlocks.M)

		// for key, value := range op.OrderBooks {
		// 	log.Printf("MarketId: %v \nOrderBook: %+v", key, *value)
		// }

		// values, err = rows.Values()
		// if err != nil {
		// 	log.Fatal("Error reading rows for order processor state snapshot $v", err)
		// }

		// log.Printf("Row values for order processor state snapshot: %v", values)

	}

	fmt.Printf("Restored order processor state for height: %v", height)

	// os.Exit(0)

}

// Takes a snapshot of the state of the order processor and persists it to our database so that we can recover
// the state of the order processor when we sync the Vega node from a particular height
func (op *orderProcessor) TakeStateSnapshot(coreSnapshotData *eventspb.CoreSnapshotData) {

	blockMapJson, err := json.Marshal(op.RecentBlocks.M)
	if err != nil {
		log.Fatalf("Failed to marshal recent blocks map into JSON: %v", err)
	}

	orderBooksJson, err := json.Marshal(op.OrderBooks)
	if err != nil {
		log.Fatalf("Failed to marshal order books into JSON: %v", err)
	}

	recentBlocksMapPgJson := pgtype.JSON{}
	orderBooksPgJson := pgtype.JSON{}

	recentBlocksMapPgJson.Set(blockMapJson)
	orderBooksPgJson.Set(orderBooksJson)

	fmt.Printf("Order processor state snapshot taken.")

	recentBlock, ok := op.RecentBlocks.Get(strconv.Itoa(int(coreSnapshotData.BlockHeight)))
	if !ok {
		log.Fatalf("failed to get recent block at height %v, when taking order processor state snapshot.", coreSnapshotData.BlockHeight)
	}

	stateSnapshot := &orderProcessorStateSnapshot{
		height:              coreSnapshotData.BlockHeight,
		timestamp:           recentBlock.Timestamp,
		orderBooksJson:      orderBooksPgJson,
		recentBlocksMapJson: recentBlocksMapPgJson,
	}

	op.stateSnapshotPersistCh <- stateSnapshot
}

func (op *orderProcessor) RegisterBeginBlock(bb *eventspb.BeginBlock) {

	if op.currentHeight != op.lastCompletedHeight {
		log.Printf("Order processor currentHeight: %v\n", op.currentHeight)
		log.Printf("Order processor lastCompletedHeight: %v\n", op.lastCompletedHeight)
		log.Fatalf("Recieved begin block event before we fully processed the last block...")
		// Need to recover from recent snapshot and send appropriate height to vega node so it can load
		// a Core snapshot from the same height.
	} else if bb.Height > op.currentHeight+1 {
		log.Fatalf("Height of incoming beginBlock event is too large, should not be more than 1 ahead of current height. Difference: %v", bb.Height-op.currentHeight)
	}

	rb := &recentBlock{Height: strconv.Itoa(int(bb.Height)), Timestamp: bb.Timestamp}
	op.RecentBlocks.Store(strconv.Itoa(int(bb.Height)), rb)
	op.RecentBlocks.Delete(strconv.Itoa(int(bb.Height) - 1000))

	op.currentHeight = bb.Height

	fmt.Printf("Registered new block for height: %v\n", rb.Height)
}

func (op *orderProcessor) RegisterEndBlock(eb *eventspb.EndBlock) {
	// Used to determine if we have state from an incomplete block in the order processor.

	op.lastCompletedHeight = eb.Height

}

func (op *orderProcessor) GetOrderBookSnapshots(endBlock *eventspb.EndBlock) map[string]*orderBookSnapshot {

	height := endBlock.Height
	recentBlock, ok := op.RecentBlocks.Get(strconv.Itoa(int(height)))
	if !ok {
		log.Fatalf("Recent block of height %v not found.\n", height)
	}

	snapshots := map[string]*orderBookSnapshot{}

	for marketId, ob := range op.OrderBooks {

		snapshot := &orderBookSnapshot{
			height:    height,
			timestamp: recentBlock.Timestamp,
			marketId:  marketId,
			buys:      []*snapshotPriceLevel{},
			sells:     []*snapshotPriceLevel{},
		}

		// Log price levels to check that they are correctly ordered
		bidOrderIds := []string{}
		askOrderIds := []string{}
		bidPrices := []string{}
		askPrices := []string{}
		for _, level := range op.OrderBooks[marketId].Buys.Levels {
			for _, order := range level.Orders {
				bidOrderIds = append(bidOrderIds, order.Id)
			}
			bidPrices = append(bidPrices, level.Price.String())
		}
		for _, level := range op.OrderBooks[marketId].Sells.Levels {
			for _, order := range level.Orders {
				askOrderIds = append(askOrderIds, order.Id)
			}
			askPrices = append(askPrices, level.Price.String())
		}
		log.Printf("Price levels for buy side: \n%+v\n", bidPrices)
		log.Printf("Order Ids for buy side: \n%+v\n", bidOrderIds)
		log.Printf("Price levels for sell side: \n%+v\n", askPrices)
		log.Printf("Order Ids for sell side: \n%+v\n", askOrderIds)

		// Get price and volume at each price level for each side
		cumulativeVol := decimal.NewFromInt(0)
		for _, level := range ob.Buys.Levels {
			cumulativeVol = cumulativeVol.Add(level.Volume)
			snapshot.buys = append(snapshot.buys, &snapshotPriceLevel{
				Price:            level.Price.String(),
				Volume:           level.Volume.String(),
				CumulativeVolume: cumulativeVol.String(),
			})
		}

		cumulativeVol = decimal.NewFromInt(0)
		for _, level := range ob.Sells.Levels {
			cumulativeVol = cumulativeVol.Add(level.Volume)
			snapshot.sells = append(snapshot.sells, &snapshotPriceLevel{
				Price:            level.Price.String(),
				Volume:           level.Volume.String(),
				CumulativeVolume: cumulativeVol.String(),
			})
		}

		// Calculate +/-2% slippage liquidity

		// Calculate total book volume

		snapshots[marketId] = snapshot
	}

	return snapshots
}

func (op *orderProcessor) ProcessExpiredOrders(expiredOrders *eventspb.ExpiredOrders) {

	fmt.Printf("Recieved expired orders: %+v\n", expiredOrders)

	ob := op.OrderBooks[expiredOrders.MarketId]

	for _, orderId := range expiredOrders.OrderIds {
		ob.RemoveExpiredOrder(ob.GetOrderById(orderId))
	}
}

func (op *orderProcessor) ProcessOrder(order *vega.Order) {

	// fmt.Printf("Recieved order event: %+v\n", order)

	if order.Type != vega.Order_TYPE_LIMIT {
		log.Printf("OrderProcessor: Order of type: %v is not limit order. Ignoring...\n", order.Type)
		return
	}

	marketId := order.MarketId
	orderBook, ok := op.OrderBooks[marketId]
	if !ok {
		log.Printf("Orderbook not found for market: %v. Registering new market...\n", marketId)
		orderBook = op.RegisterNewMarket(order.MarketId)

	}

	switch true {
	case order.Status == vega.Order_STATUS_CANCELLED:
		orderBook.RemoveCancelledOrder(order)
	case order.Status == vega.Order_STATUS_ACTIVE:
		orderBook.AddOrUpdateOrder(order)
	case order.Status == vega.Order_STATUS_FILLED:
		orderBook.RemoveFilledOrder(order)
	case order.Status == vega.Order_STATUS_STOPPED:
		orderBook.RemoveStoppedOrder(order)
	case order.Status == vega.Order_STATUS_PARKED:
		orderBook.RemoveParkedOrder(order)
	}

}

func (op *orderProcessor) RegisterNewMarket(marketId string) *orderBook {
	op.OrderBooks[marketId] = &orderBook{
		MarketId: marketId,
		Orders:   map[string]*vega.Order{},
		Buys:     &orderBookSide{Side: vega.Side_SIDE_BUY},
		Sells:    &orderBookSide{Side: vega.Side_SIDE_SELL},
	}

	return op.OrderBooks[marketId]
}

func (o *orderBook) RemoveExpiredOrder(order *vega.Order) {

	// obSide := o.GetOrderBookSideByOrderId(orderId)
	obSide := o.GetOrderBookSide(order.Side)
	obSide.RemoveOrder(order)
	delete(o.Orders, order.Id)
}

func (o *orderBook) RemoveCancelledOrder(order *vega.Order) {

	// If order has no version we will assume it never made it to the book on core and
	// we will not try to remove it. Any other case where we get an error from a cancelled
	// order we must assume we have a bug so we can't just check if the order exists in
	// our book like we do for stopped orders.
	if order.Version == 0 {
		fmt.Printf("No version associated with cancelled order, ignoring...")
		return
	}

	obSide := o.GetOrderBookSide(order.Side)
	obSide.RemoveOrder(order)
	delete(o.Orders, order.Id)
}

func (o *orderBook) RemoveFilledOrder(order *vega.Order) {

	// Previously assumed that an order would make it onto the book before being filled because we
	// are filtering out market orders. As such we assumed that the status of limit orders would go
	// from STATUS_ACTIVE -> STATUS_FILLED. This assumption was false because limit orders can cross
	// the spread and match instantly.
	// So some "STATUS_FILLED" orders will never make it onto the book and we need to account for this.
	// It appears that we can simply check for the prior existence of the filled order's orderId in our order
	// map, failing this check means the limit order crossed the spread.
	order, ok := o.Orders[order.Id]
	if !ok {
		log.Printf("Filled order not found in orderbook, nothing to remove.")
		return
	}

	obSide := o.GetOrderBookSide(order.Side)
	obSide.RemoveOrder(order)
	delete(o.Orders, order.Id)
}

func (o *orderBook) RemoveStoppedOrder(order *vega.Order) {

	// Check if order exists
	order, ok := o.Orders[order.Id]
	if !ok {
		log.Printf("Stopped order not found in orderbook, nothing to remove.")
		return
	}
	obSide := o.GetOrderBookSide(order.Side)
	obSide.RemoveOrder(order)
	delete(o.Orders, order.Id)
}

func (o *orderBook) RemoveParkedOrder(order *vega.Order) {

	// Check if order exists
	oldOrder, ok := o.Orders[order.Id]
	if !ok {
		log.Printf("Parked order not found in orderbook, nothing to remove.")
		return
	}

	obSide := o.GetOrderBookSide(order.Side)
	obSide.RemoveOrder(oldOrder)
	delete(o.Orders, order.Id)
}

func (o *orderBook) AddOrUpdateOrder(order *vega.Order) {

	if oldOrder, ok := o.Orders[order.Id]; !ok {
		// Add order
		obSide := o.GetOrderBookSide(order.Side)
		obSide.AddNewOrder(order)
		o.Orders[order.Id] = order
	} else {
		// Order with Id already present
		obSide := o.GetOrderBookSide(order.Side)
		obSide.UpdateOrder(oldOrder, order)
		o.Orders[order.Id] = order
	}

}

func (o *orderBook) GetOrderById(id string) (order *vega.Order) {
	order, ok := o.Orders[id]
	if !ok {
		log.Fatalf("Order with id: %v not found for market: %v.", id, o.MarketId)
	}
	return order
}

func (o *orderBook) GetOrderBookSide(side vega.Side) *orderBookSide {
	if side == vega.Side_SIDE_BUY {
		return o.Buys
	}
	return o.Sells
}

func (o *orderBook) GetOrderBookSideByOrderId(orderId string) *orderBookSide {
	if o.Orders[orderId].Side == vega.Side_SIDE_BUY {
		return o.Buys
	}
	return o.Sells
}

func (s *orderBookSide) AddNewOrder(order *vega.Order) {

	orderRemaining := decimal.NewFromInt(int64(order.Remaining))
	orderPrice, err := decimal.NewFromString(order.Price)
	if err != nil {
		log.Fatalf("Failed to parse price string: %v", err)
	}

	// Check if level already exists
	var idx int
	if s.Side == vega.Side_SIDE_BUY {
		// Bids should be sorted in descending
		idx = sort.Search(len(s.Levels), func(i int) bool {
			return s.Levels[i].Price.LessThanOrEqual(orderPrice)
		})
	} else {
		// Asks should be sorted in ascending
		idx = sort.Search(len(s.Levels), func(i int) bool {
			return s.Levels[i].Price.GreaterThanOrEqual(orderPrice)
		})
	}

	if idx >= len(s.Levels) {
		// Level not found, add it
		s.Levels = append(s.Levels, nil)
		copy(s.Levels[idx+1:], s.Levels[idx:])
		s.Levels[idx] = &priceLevel{
			Price:  orderPrice,
			Volume: orderRemaining,
			Orders: []*vega.Order{order},
		}
	} else if !s.Levels[idx].Price.Equal(orderPrice) {
		// Level not found, add it
		s.Levels = append(s.Levels, nil)
		copy(s.Levels[idx+1:], s.Levels[idx:])
		s.Levels[idx] = &priceLevel{
			Price:  orderPrice,
			Volume: orderRemaining,
			Orders: []*vega.Order{order},
		}
	} else {
		// Level found, update it
		s.Levels[idx].Orders = append(s.Levels[idx].Orders, order)
		s.Levels[idx].Volume = s.Levels[idx].Volume.Add(orderRemaining)
	}
}

func (s *orderBookSide) UpdateOrder(oldOrder, order *vega.Order) {

	// First remove old order.
	s.RemoveOrder(oldOrder)

	// Add updated version
	s.AddNewOrder(order)

}

func (s *orderBookSide) RemoveOrder(order *vega.Order) {

	// orderSize := decimal.NewFromInt(int64(order.Size))
	orderRemaining := decimal.NewFromInt(int64(order.Remaining))
	orderPrice, err := decimal.NewFromString(order.Price)
	if err != nil {
		log.Fatalf("Failed to parse price string: %v", err)
	}

	// Find price level
	var idx int
	if s.Side == vega.Side_SIDE_BUY {
		// Bids should be sorted in descending
		idx = sort.Search(len(s.Levels), func(i int) bool {
			return s.Levels[i].Price.LessThanOrEqual(orderPrice)
		})
	} else {
		// Asks should be sorted in ascending
		idx = sort.Search(len(s.Levels), func(i int) bool {
			return s.Levels[i].Price.GreaterThanOrEqual(orderPrice)
		})
	}

	if idx >= len(s.Levels) {
		log.Fatalf("Could not find corresponding price level for order. Order: %v\n", order)
	}

	level := s.Levels[idx]

	// for _, order := range level.Orders {
	// 	fmt.Printf("Order: %v\n\n", order)
	// }

	orderIdx := -1
	for i, o := range level.Orders {
		if o.Id == order.Id {
			orderIdx = i
			break
		}
	}

	if orderIdx != -1 {
		// Adjust volume (modify to taking icebergs into account by using TrueRemaining)
		s.Levels[idx].Volume = s.Levels[idx].Volume.Sub(orderRemaining)
		// Remove the order at index
		copy(level.Orders[orderIdx:], level.Orders[orderIdx+1:])
		level.Orders = level.Orders[:len(level.Orders)-1]
	} else {
		log.Fatalf("Could not find order at price level. Order: %v, Price level: %v\n", order, level.Price)
	}

	if len(level.Orders) <= 0 {
		// Remove price level
		s.Levels = s.Levels[:idx+copy(s.Levels[idx:], s.Levels[idx+1:])]
	}

}
