const { Client, Events, GatewayIntentBits, ActivityType } = require('discord.js');
const { DataHandler } = require('./dataHandler.js');

const client = new Client({ intents: [ GatewayIntentBits.Guilds ] });
const token = process.env.DISCORD_TOKEN;
const tokens = JSON.parse(process.env.DISCORD_TOKENS).tokens;
const apiAddr = `http://${process.env.API_SERVICE_MAINNET_SERVICE_HOST}:8080`;
const dh = new DataHandler(apiAddr);
const cm = new ClientManager(dh);

const loginClients = () => {

};

const setClientActivities = () => {

};



client.once(Events.ClientReady, async (x) => {
    console.log(`Client Ready. Logged in as ${x.user.id}`);

    client.user.setActivity('USDT volume on Vega.', { type: ActivityType.Watching });

    // Get decimals
    await dh.updateDecimals();

    // Get volumes
    await dh.updateMarketVolumes();

    const intervalId = setInterval(async () => {
        console.log(`Updating Decimals...`);
        await dh.updateDecimals();
        console.log(`Updating Data...`);
        await dh.updateMarketVolumes();
        await dh.updateTradesCount();
        await dh.updateFeesGenerated();
        await dh.updateOpenInterest();
        console.log(`Calculating totals...`);
        const volume = dh.getTotalVolume();
        const numTrades = dh.getTradesCount();
        const fees = dh.getFeesGenerated();
        const openInterest = dh.getOpenInterest();
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


    // const guilds = client.guilds.cache;
    // console.log(guilds);
    // guilds.forEach((guild) => {
    //     console.log(guild);
    //     console.log(`GuildId: ${guild.id}`);
    //     console.log(`GuildName: ${guild.name}`);
    //     guild.members.me.setNickname(BigInt(volume.USDT).toLocaleString());
    // });


});

client.login(token);