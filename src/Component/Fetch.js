import { useEffect, useState } from 'react'

const Fetch = (props) => {

    const [marketNews, funcMarketNews] = useState()
    props.Fdata(marketNews)
    let news = props.news

    let apiKey = 'd064065a6amshb059169a3069fb0p15443bjsnbf019d4664e5';


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
        else if(news === undefined){
          MarketNews()
        }
        MarketNews()
    },[])
}

export default Fetch
