'use strict';

// const ccxt = require('ccxt'); //<--------------------------------------------------------------- 1. Import ccxt from cdn
require('dotenv').config()


(async function () {
    // let binance  = new ccxt.binance ()
    const binance = new ccxt.binance ({
        apiKey: process.env.API_KEY,
        secret: process.env.API_SECRET, //<------------------------------------------------------- 2. Add your API keys
    })  
    console.log(binance.id, await binance.loadMarkets())
    console.log('Exchange Id:', binance.id)
    console.log (binance.id, await binance.fetchOrderBook ("BTC/USD", 5))

    // if (binance.has['watchOrderBook']) { <---------------------------------------------------- 3. Check if the exchange has the method
    //     while (true) {
    //         try {
    //             const orderbook = await binance.watchOrderBook(symbol, limit,const symbol =  params)
    //             console.log(new Date(), symbol, orderbook['asks'][0], orderbook['bids'][0])
    //         } catch (e) {
    //             console.log(e)
    //             // stop the loop on exception or leave it commented to retry
    //             // throw e
    //         }
    //     }
    // }

})()


