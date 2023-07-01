import React, { useEffect, useState } from 'react'

const Fetch = (props) => {

    let news = props.news
    let CurrencyPair = props.CurrencyPair

    console.log("from fetch", news)

    let apiKey = 'd064065a6amshb059169a3069fb0p15443bjsnbf019d4664e5';

    const [AllForexData, funcAllForexData] = useState()
    
    const [marketNews, funcMarketNews] = useState()
    props.Fdata(marketNews)

    // fetch all available forex data
    async function fetchAllForexData(){
        const URL = `https://twelve-data1.p.rapidapi.com/market_movers/forex`;
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': `${apiKey}`,
            'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
          }
        };  
        try {
          const response = await fetch(URL, options);
          const result = await response.json();
          console.log(result);
          funcAllForexData(result.values)
        } catch (error) {
          console.error(error);
        }
    }


    


    // market news
    async function MarketNews(){
        const URL = `https://global-stock-market-api-data.p.rapidapi.com/news${news? news : "/latest_news"}`;
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': `${apiKey}`,
            'X-RapidAPI-Host': 'global-stock-market-api-data.p.rapidapi.com'
          }
        };
        try {
          const response = await fetch(URL, options);
          const result = await response.json();
          console.log(result);
          funcMarketNews(result)
        } catch (error) {
          console.error(error);
        }
    }


    useEffect(()=>{
        if(news){
          MarketNews()
        }
        else if(news = undefined){
          MarketNews()
        }
        MarketNews()
    }, [news])
}

export default Fetch
