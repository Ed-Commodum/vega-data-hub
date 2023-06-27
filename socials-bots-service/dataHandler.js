class DataHandler {
    constructor(apiAddr) {
        this.apiAddr = apiAddr;
        this.decimals = {};
        this.assetDecimals = {};
        this.volumes = [];
        this.trades = [];
        this.marketFees = [];
        this.openInterests = [];
        this.totalValueLocked = [];

    }

    async updateDecimals() {
        const decimalsRes = await fetch(`${this.apiAddr}/decimals`);
        const resJson = await decimalsRes.json();
        // console.log(resJson);
        for (let market of resJson.decimals) {
            this.decimals[market.marketId] = {
                settlementAsset: market.settlementAsset,
                assetName: market.quoteName,
                assetDecimals: market.assetDecimals,
                priceDecimals: market.priceDecimals,
                positionDecimals: market.positionDecimals
            };
        }
        // console.log(this.decimals);
    }

    async updateMarketVolumes() {
        const volumeRes = await fetch(`${this.apiAddr}/volume`);
        const resJson = await volumeRes.json();
        // console.log(resJson);
        this.volumes.length = 0;
        for (let market of resJson.volumes) {
            if (!Object.keys(this.decimals).includes(market.marketId)) continue;
            this.volumes.push({
                marketId: market.marketId,
                timestamp: market.timestamp,
                volume: this.convertVolumeUnits(market.marketId, market.volume).toString(),
                assetName: this.decimals[market.marketId].assetName
            });
        }
        // console.log(this.volumes);
    }

    async updateTradesCount() {
        const tradesRes = await fetch(`${this.apiAddr}/trades-count`);
        const tradesJson = await tradesRes.json();
        console.log(tradesJson);
        this.trades.length = 0;
        for (let market of tradesJson.tradesCounts) {
            if (!Object.keys(this.decimals).includes(market.marketId)) continue;
            this.trades.push(
                {
                    marketId: market.marketId,
                    timestamp: market.timestamp,
                    tradesCount: market.tradesCount
                }
            )
        }
    }

    async updateFeesGenerated() {
        const feesRes = await fetch(`${this.apiAddr}/fees-generated`);
        const feesJson = await feesRes.json();
        this.marketFees.length = 0;
        for (let market of feesJson.feesGenerated) {
            if (!Object.keys(this.decimals).includes(market.marketId)) continue;
            market.assetName = this.decimals[market.marketId].assetName;
            // this.marketFees.push(market);
            this.marketFees.push(
                {
                    marketId: market.marketId,
                    assetName: market.assetName,
                    timestamp: market.timestamp,
                    infraTimestamp: market.infraTimestamp,
                    fees: {
                        total: this.convertFeeUnits(market.marketId, market.fees.total, 'Total fees'),
                        maker: this.convertFeeUnits(market.marketId, market.fees.maker, 'Maker fees'),
                        liquidity: this.convertFeeUnits(market.marketId, market.fees.liquidity, 'Liquidity fees'),
                        infrastructure: this.convertFeeUnits(market.marketId, market.fees.infrastructure, 'Infrastructure fees')
                    }
                }
            );
        }
    }

    async updateOpenInterest() {
        const openInterestRes = await fetch(`${this.apiAddr}/open-interest`);
        const openInterestJson = await openInterestRes.json();
        this.openInterests.length = 0;
        for (let market of openInterestJson.openInterests) {
            console.log(market);
            if (!Object.keys(this.decimals).includes(market.marketId)) continue;
            this.openInterests.push(
                {
                    marketId: market.marketId,
                    timestamp: market.timestamp,
                    assetName: this.decimals[market.marketId].assetName,
                    openInterestContracts: market.openInterest,
                    lastTradedPrice: market.lastTradedPrice,
                    openInterest: this.convertVolumeUnits(market.marketId, (BigInt(market.openInterest) * BigInt(market.lastTradedPrice)))
                }
            );
        }
    }

    async updateTotalValueLocked() {
        const tvlRes = await fetch(`${this.apiAddr}/total-value-locked`);
    }

    convertVolumeUnits(marketId, volume) {
        const priceDecimals = this.decimals[marketId].priceDecimals;
        const positionDecimals = this.decimals[marketId].positionDecimals;
        const assetName = this.decimals[marketId].assetName;
        const exponent = BigInt(priceDecimals) + BigInt(positionDecimals);
        const converted = BigInt(volume) / 10n**exponent;
        console.log(`Volume: ${volume.toString()} converted to ${converted.toLocaleString()} ${assetName}`);
        return converted;
    }

    convertFeeUnits(marketId, fee, type) {
        const assetName = this.decimals[marketId].assetName;
        const assetDecimals = this.decimals[marketId].assetDecimals;
        const converted = BigInt(fee) / 10n**BigInt(assetDecimals);
        console.log(`${type}: ${fee.toString()} converted to ${converted.toLocaleString()} ${assetName}`);
        return converted;
    }

    getTotalVolume() {
        // Calculates the total volume and returns some JSON with the total for each distinct settlement asset.
        const result = {};
        for (let market of this.volumes) {
            if (!Object.keys(result).includes(market.assetName)) result[market.assetName] = 0n;
            result[market.assetName] += BigInt(market.volume);
        };
        for (let [ key, value ] of Object.entries(result)) result[key] = value.toString();
        return result;
    }

    getTradesCount() {
        const result = {
            tradesCount: 0n,
            timestamp: 0n
        };
        for (let market of this.trades) {
            if (BigInt(market.timestamp) > BigInt(result.timestamp)) result.timestamp = market.timestamp;
            result.tradesCount += BigInt(market.tradesCount);
        };
        result.tradesCount = result.tradesCount.toString();
        return result;
    }

    getFeesGenerated() {
        const result = {};
        for (let market of this.marketFees) {
            if (!Object.keys(result).includes(market.assetName)) result[market.assetName] = 0n;
            result[market.assetName] += BigInt(market.fees.total);
        };
        for (let [ key, value ] of Object.entries(result)) result[key] = value.toString();
        return result;
    }

    getOpenInterest() {
        const result = {};
        for (let market of this.openInterests) {
            if (!Object.keys(result).includes(market.assetName)) result[market.assetName] = 0n;
            result[market.assetName] += BigInt(market.openInterest);
        }
        for (let [ key, value ] of Object.entries(result)) result[key] = value.toString();
        return result;
    }

    getTotalValueLocked() {
        
    }

}

module.exports = {
    DataHandler
}