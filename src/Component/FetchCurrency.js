import React from 'react'

const FetchCurrency = () => {
    const URL = `https://global-stock-market-api-data.p.rapidapi.com/news${news? news : "/latest_news"}`;
    const options = {
        method: 'GET',
        headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
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

export default FetchCurrency
