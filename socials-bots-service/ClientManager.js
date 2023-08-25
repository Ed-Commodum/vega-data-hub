const { Client, Events, GatewayIntentBits, ActivityType } = require('discord.js');

class ClientManager {
    constructor(dataHandler) {
        this.dh = dataHandler;
        this.numClients = 0;
        this.numClientsReady = 0;
        this.clients = {};
        this.loginTimeoutId;
        this.dataUpdateIntervalId;
    };

    login(tokens) {
        this.loginTimeoutId = setTimeout(() => {
            throw new Error(`Failed to login to all clients: Timed Out.`);
        }, 10000);
        this.numClients = Object.keys(tokens).length;
        for (let [ name, token ] of Object.entries(tokens)) {
            this.clients[name] = new Client({ intents: [ GatewayIntentBits.Guilds ] });
            this.setClientReadyListener(name);
            this.clients[name].login(token);
        };
    };

    setClientReadyListener(clientName) {
        this.clients[clientName].once(Events.ClientReady, async (client) => {
            console.log(`Client Ready. Logged in as ${client.user.id}`);
            switch (clientName) {
                case 'volume':
                    client.user.setActivity('total volume.', { type: ActivityType.Watching });
                    break;
                case 'trades':
                    client.user.setActivity('trades on Vega.', { type: ActivityType.Watching });
                    break;
                case 'fees':
                    client.user.setActivity('total USDT fees.', { type: ActivityType.Watching });
                    break;
                case 'openInterest':
                    client.user.setActivity('open interest', { type: ActivityType.Watching });
                    break;
                case 'totalValueLocked':
                    client.user.setActivity('deposits and withdrawals.', { type: ActivityType.Watching });
                    break;
            };
            this.numClientsReady++
            if (this.numClientsReady == this.numClients) {
                this.handleAllReady();
            };
        });
    };

    async handleAllReady() {
        console.log("All clients ready...");
        clearTimeout(this.loginTimeoutId);

        this.dataUpdateIntervalId = setInterval(async () => {
            console.log(`Updating Data...`);
            await Promise.all([
                this.dh.updateDecimals(),
                this.dh.updateMarketVolumes(),
                this.dh.updateTradeCount(),
                this.dh.updateFeesGenerated(),
                this.dh.updateOpenInterest(),
                this.dh.updateTotalValueLocked()
            ]);

            for (let [ name, client ] of Object.entries(this.clients)) {
                switch (name) {
                    case 'volume':
                        client.guilds.cache.forEach((guild) => {
                            guild.members.me.setNickname(`$${BigInt(this.dh.getTotalVolume().USDT).toLocaleString()}`);
                        });
                        break;
                    case 'trades':
                        client.guilds.cache.forEach((guild) => {
                            guild.members.me.setNickname(`${BigInt(this.dh.getTradeCount().tradeCount).toLocaleString()} trades`);
                        });
                        break;
                    case 'fees':
                        client.guilds.cache.forEach((guild) => {
                            guild.members.me.setNickname(`$${BigInt(this.dh.getFeesGenerated().USDT).toLocaleString()} USDT`);
                        });
                        break;
                    case 'openInterest':
                        client.guilds.cache.forEach((guild) => {
                            guild.members.me.setNickname(`$${BigInt(this.dh.getOpenInterest().USDT).toLocaleString()}`);
                        });
                        break;
                    case 'totalValueLocked':
                        client.guilds.cache.forEach((guild) => {
                            const tvl = this.dh.getTotalValueLocked();
                            // console.log(tvl);
                            // guild.members.me.setNickname(`$${(BigInt(tvl.USDT) + BigInt(tvl.USDC)).toLocaleString()} TVL`);
                            guild.members.me.setNickname(`$${BigInt(tvl.USDT).toLocaleString()} TVL`);
                        });
                    break;
                }
            }

        }, 60000);

    };

}

module.exports = { ClientManager };