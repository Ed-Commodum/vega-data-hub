const { Client, Events, GatewayIntentBits, ActivityType } = require('discord.js');

class ClientManager {
    constructor(dataHandler) {
        this.dh = dataHandler;
        this.numClients = 0;
        this.numClientsReady = 0;
        this.clients = {};
        this.loginTimeoutId;
    };

    login(tokens) {
        this.loginTimeoutId = setTimeout(() => {
            throw new Error(`Failed to login to all clients: Timed Out.`);
        }, 5000);
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
                    client.user.setActivity('USDT volume on Vega.', { type: ActivityType.Watching });
                    break;
                case 'trades':
                    client.user.setActivity('trades on Vega.', { type: ActivityType.Watching });
                    break;
                case 'fees':
                    client.user.setActivity('USDT fees on Vega.', { type: ActivityType.Watching });
                    break;
                case 'openInterest':
                    client.user.setActivity('open interest on Vega.', { type: ActivityType.Watching });
                    break;
                case 'totalValueLocked':
                    client.user.setActivity('the ERC-20 bridge.', { type: ActivityType.Watching });
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

        await this.dh.updateDecimals();

        const intervalId = setInterval(async () => {
            console.log(`Updating Data...`);
            await this.dh.updateDecimals();
            await this.dh.updateMarketVolumes();
            await this.dh.updateTradesCount();
            await this.dh.updateFeesGenerated();
            await this.dh.updateOpenInterest();
            console.log(`Calculating totals...`);
            const volume = dh.getTotalVolume();
            const numTrades = dh.getTradesCount();
            const fees = dh.getFeesGenerated();
            const openInterest = dh.getOpenInterest();

            for (let [ name, client ] of Object.entries(this.clients)) {
                switch (name) {
                    case 'volume':
                        client.guild.cache.forEach((guild) => {
                            guild.members.me.setNickname(`$${BigInt(this.dh.getTotalVolume().USDT).toLocaleString()} USDT`);
                        });
                        break;
                    case 'trades':
                        client.guild.cache.forEach((guild) => {
                            guild.members.me.setNickname(`${BigInt(this.dh.getTradesCount().tradesCount).toLocaleString()} trades`);
                        });
                        break;
                    case 'fees':
                        client.guild.cache.forEach((guild) => {
                            guild.members.me.setNickname(`$${BigInt(this.dh.getFeesGenerated().USDT).toLocaleString()} USDT`);
                        });
                        break;
                    case 'openInterest':
                        client.guild.cache.forEach((guild) => {
                            guild.members.me.setNickname(`$${BigInt(this.dh.getOpenInterest().USDT).toLocaleString()} USDT`);
                        });
                        break;
                    case 'totalValueLocked':
                        client.guild.cache.forEach((guild) => {
                            guild.members.me.setNickname(`$${BigInt(this.dh.getTotalValueLocked().USDT).toLocaleString()} USDT`);
                        });
                        break;
                }
            }

            console.log(`Volume Summary: `);
            console.log(volume);
            console.log(`Trades Count Summary: `);
            console.log(numTrades);
            console.log(`Fees Generated Summary: `);
            console.log(fees);
            console.log(`Open Interest Summary: `);
            console.log(openInterest);
            client.guilds.cache.forEach((guild) => {
                // console.log(`GuildId: ${guild.id}`);
                // console.log(`GuildName: ${guild.name}`);
                guild.members.me.setNickname(`$${BigInt(volume.USDT).toLocaleString()} USDT`);
            });
        }, 60000);
    };
}