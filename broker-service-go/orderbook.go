package main

import (
	"fmt"
	"log"
	"sort"
	"strconv"
	"sync"

	"code.vegaprotocol.io/vega/protos/vega"
	eventspb "code.vegaprotocol.io/vega/protos/vega/events/v1"
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
	CumulativeVolume string `json:"cumulative Volume"`
}

type orderBookSnapshot struct {
	height    uint64
	timestamp int64
	marketId  string
	buys      []*snapshotPriceLevel
	sells     []*snapshotPriceLevel
}

type priceLevel struct {
	price  decimal.Decimal
	orders []*vega.Order
	volume decimal.Decimal
	// hiddenVolume decimal.Decimal
}

type orderBookSide struct {
	side   vega.Side
	levels []*priceLevel
}

type orderBook struct {
	marketId string
	orders   map[string]*vega.Order
	buys     *orderBookSide
	sells    *orderBookSide
}

type OrderProcessor interface {
	ProcessOrder(*vega.Order)
	ProcessExpiredOrders(*eventspb.ExpiredOrders)
	RegisterNewMarket(string) *orderBook
}

type orderProcessor struct {
	orderBooks   map[string]*orderBook
	recentBlocks *blockMap
}

func newOrderProcessor() OrderProcessor {
	return &orderProcessor{
		orderBooks: map[string]*orderBook{},
		recentBlocks: &blockMap{
			mu: sync.RWMutex{},
			m:  map[string]*recentBlock{},
		},
	}
}

func (op *orderProcessor) RegisterBeginBlock(bb *eventspb.BeginBlock) {

	rb := &recentBlock{height: strconv.Itoa(int(bb.Height)), timestamp: bb.Timestamp}
	op.recentBlocks.Store(strconv.Itoa(int(bb.Height)), rb)
	op.recentBlocks.Delete(strconv.Itoa(int(bb.Height) - 1000))
	fmt.Printf("Registered new block for height: %v\n", rb.height)
}

func (op *orderProcessor) GetSnapshots(endBlock *eventspb.EndBlock) map[string]*orderBookSnapshot {

	height := endBlock.Height
	recentBlock, ok := op.recentBlocks.Get(strconv.Itoa(int(height)))
	if !ok {
		log.Fatalf("Recent block of height %v not found.\n", height)
	}

	snapshots := map[string]*orderBookSnapshot{}

	for marketId, ob := range op.orderBooks {

		snapshot := &orderBookSnapshot{
			height:    height,
			timestamp: recentBlock.timestamp,
			marketId:  marketId,
			buys:      []*snapshotPriceLevel{},
			sells:     []*snapshotPriceLevel{},
		}

		// Log price levels to check that they are correctly ordered
		bidOrderIds := []string{}
		askOrderIds := []string{}
		bidPrices := []string{}
		askPrices := []string{}
		for _, level := range op.orderBooks[marketId].buys.levels {
			for _, order := range level.orders {
				bidOrderIds = append(bidOrderIds, order.Id)
			}
			bidPrices = append(bidPrices, level.price.String())
		}
		for _, level := range op.orderBooks[marketId].sells.levels {
			for _, order := range level.orders {
				askOrderIds = append(askOrderIds, order.Id)
			}
			askPrices = append(askPrices, level.price.String())
		}
		log.Printf("Price levels for buy side: \n%+v\n", bidPrices)
		log.Printf("Order Ids for buy side: \n%+v\n", bidOrderIds)
		log.Printf("Price levels for sell side: \n%+v\n", askPrices)
		log.Printf("Order Ids for sell side: \n%+v\n", askOrderIds)

		// Get price and volume at each price level for each side
		cumulativeVol := decimal.NewFromInt(0)
		for _, level := range ob.buys.levels {
			cumulativeVol = cumulativeVol.Add(level.volume)
			snapshot.buys = append(snapshot.buys, &snapshotPriceLevel{
				Price:            level.price.String(),
				Volume:           level.volume.String(),
				CumulativeVolume: cumulativeVol.String(),
			})
		}

		cumulativeVol = decimal.NewFromInt(0)
		for _, level := range ob.sells.levels {
			cumulativeVol = cumulativeVol.Add(level.volume)
			snapshot.sells = append(snapshot.sells, &snapshotPriceLevel{
				Price:            level.price.String(),
				Volume:           level.volume.String(),
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

	ob := op.orderBooks[expiredOrders.MarketId]

	for _, orderId := range expiredOrders.OrderIds {
		ob.RemoveExpiredOrder(ob.GetOrderById(orderId))
	}
}

func (op *orderProcessor) ProcessOrder(order *vega.Order) {

	fmt.Printf("Recieved order event: %+v\n", order)

	if order.Type != vega.Order_TYPE_LIMIT {
		log.Printf("OrderProcessor: Order of type: %v is not limit order. Ignoring...\n", order.Type)
		return
	}

	marketId := order.MarketId
	orderBook, ok := op.orderBooks[marketId]
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
	op.orderBooks[marketId] = &orderBook{
		marketId: marketId,
		orders:   map[string]*vega.Order{},
		buys:     &orderBookSide{side: vega.Side_SIDE_BUY},
		sells:    &orderBookSide{side: vega.Side_SIDE_SELL},
	}

	return op.orderBooks[marketId]
}

func (o *orderBook) RemoveExpiredOrder(order *vega.Order) {

	// obSide := o.GetOrderBookSideByOrderId(orderId)
	obSide := o.GetOrderBookSide(order.Side)
	obSide.RemoveOrder(order)
	delete(o.orders, order.Id)
}

func (o *orderBook) RemoveCancelledOrder(order *vega.Order) {

	obSide := o.GetOrderBookSide(order.Side)
	obSide.RemoveOrder(order)
	delete(o.orders, order.Id)
}

func (o *orderBook) RemoveFilledOrder(order *vega.Order) {

	obSide := o.GetOrderBookSide(order.Side)
	obSide.RemoveOrder(order)
	delete(o.orders, order.Id)
}

func (o *orderBook) RemoveStoppedOrder(order *vega.Order) {

	// Check if order exists
	order, ok := o.orders[order.Id]
	if !ok {
		log.Printf("Stopped order not found in orderbook, nothing to remove.")
		return
	}
}

func (o *orderBook) RemoveParkedOrder(order *vega.Order) {

	obSide := o.GetOrderBookSide(order.Side)
	obSide.RemoveOrder(order)
	delete(o.orders, order.Id)
}

func (o *orderBook) AddOrUpdateOrder(order *vega.Order) {

	if _, ok := o.orders[order.Id]; !ok {
		// Add order
		obSide := o.GetOrderBookSide(order.Side)
		obSide.AddNewOrder(order)
		o.orders[order.Id] = order
	} else {
		// Order with Id already present
		obSide := o.GetOrderBookSide(order.Side)
		obSide.UpdateOrder(order)
		o.orders[order.Id] = order
	}

}

func (o *orderBook) GetOrderById(id string) (order *vega.Order) {
	order, ok := o.orders[id]
	if !ok {
		log.Fatalf("Order with id: %v not found for market: %v.", id, o.marketId)
	}
	return order
}

func (o *orderBook) GetOrderBookSide(side vega.Side) *orderBookSide {
	if side == vega.Side_SIDE_BUY {
		return o.buys
	}
	return o.sells
}

func (o *orderBook) GetOrderBookSideByOrderId(orderId string) *orderBookSide {
	if o.orders[orderId].Side == vega.Side_SIDE_BUY {
		return o.buys
	}
	return o.sells
}

func (s *orderBookSide) AddNewOrder(order *vega.Order) {

	orderRemaining := decimal.NewFromInt(int64(order.Remaining))
	orderPrice, err := decimal.NewFromString(order.Price)
	if err != nil {
		log.Fatalf("Failed to parse price string: %v", err)
	}

	// Check if level already exists
	var idx int
	if s.side == vega.Side_SIDE_BUY {
		// Bids should be sorted in descending
		idx = sort.Search(len(s.levels), func(i int) bool {
			return s.levels[i].price.GreaterThanOrEqual(orderPrice)
		})
	} else {
		// Asks should be sorted in ascending
		idx = sort.Search(len(s.levels), func(i int) bool {
			return s.levels[i].price.LessThanOrEqual(orderPrice)
		})
	}

	if idx < len(s.levels) && s.levels[idx].price == orderPrice {
		// Level found, update it
		s.levels[idx].orders = append(s.levels[idx].orders, order)
		s.levels[idx].volume = s.levels[idx].volume.Add(orderRemaining)
	}

	// Level not found, add it
	s.levels = append(s.levels, nil)
	copy(s.levels[idx+1:], s.levels[idx:])
	s.levels[idx] = &priceLevel{
		price:  orderPrice,
		volume: orderRemaining,
		orders: []*vega.Order{order},
	}

}

func (s *orderBookSide) UpdateOrder(order *vega.Order) {

	// First remove old order.
	s.RemoveOrder(order)

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
	if s.side == vega.Side_SIDE_BUY {
		// Bids should be sorted in descending
		idx = sort.Search(len(s.levels), func(i int) bool {
			return s.levels[i].price.GreaterThanOrEqual(orderPrice)
		})
	} else {
		// Asks should be sorted in ascending
		idx = sort.Search(len(s.levels), func(i int) bool {
			return s.levels[i].price.LessThanOrEqual(orderPrice)
		})
	}

	if idx >= len(s.levels) {
		log.Fatalf("Could not find corresponding price level for order. Order: %v", order)
	}

	level := s.levels[idx]

	orderIdx := -1
	for i, o := range level.orders {
		if o.Id == order.Id {
			orderIdx = i
			break
		}
	}

	if orderIdx == -1 {
		// Adjust volume (modify to taking icebergs into account by using TrueRemaining)
		s.levels[idx].volume = s.levels[idx].volume.Sub(orderRemaining)
		// Remove the order at index
		copy(level.orders[orderIdx:], level.orders[orderIdx+1:])
		level.orders = level.orders[:len(level.orders)-1]
	} else {
		log.Fatalf("Could not find order at price level. Order: %v", order)
	}

	if len(level.orders) <= 0 {
		// Remove price level
		s.levels = s.levels[:idx+copy(s.levels[idx:], s.levels[idx+1:])]
	}

}
