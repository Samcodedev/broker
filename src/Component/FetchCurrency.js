import React, {useState, useEffect} from 'react'

const FetchCurrency = (props) => {

    let apiKey = 'd064065a6amshb059169a3069fb0p15443bjsnbf019d4664e5';
    // let CurrencyPair = props.CurrencyPair
  
    // const [OneCurrencyData, funcOneCurrencyData] = useState()

    //   // fetch a particular forex currency
    // async function CurrencyData(){
    //   const URL = `https://twelve-data1.p.rapidapi.com/time_series?symbol=${CurrencyPair? CurrencyPair : 'GBP/USD'}&interval=30min&outputsize=30&format=json`;
    //   const options = {
    //     method: 'GET',
    //     headers: {
    //       'X-RapidAPI-Key': `${apiKey}`,
    //       'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
    //     }
    //   };
    //   try {
    //     const response = await fetch(URL, options);
    //     const result = await response.json();
    //     console.log(result);
    //     funcOneCurrencyData(result.values)
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }

    // let data = {
    //   pair1: "USD",
    //   pair2: "GBP",
    //   pair3: "EUR",
    //   pair4: "JPY",
    //   pair5: "AUD",
    //   pair6: "CAD"
// AUDCHF
      // pair7: "US/OIL",
      // pair8: "CHF",
      // pair9: "XAU",
      // pair10: "TRY",
      // pair11: "XTZ",
      // pair12: "NZD",
      // pair13: "NGN",
      // pair14: "",
      // pair15: "",
      // pair16: ""
    // }

    // const currency = props.CurrencyPair
    

    const [allCurrency, allCurrencyFunc] = useState()
    props.currentData(allCurrency)
    // console.log("fetch curr", allCurrency)

    async function AllCurrenctData(){
      const URL = `https://twelve-data1.p.rapidapi.com/time_series?symbol=gbp%2Fusd%2Caud%2Fusd&interval=1day&outputsize=30&format=json`;
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
        let val = Object.values(result)

        val.map((item) =>{
          allCurrencyFunc(item.values)
          console.log(item)
        })
      } catch (error) {
        console.error(error);
      }
    }

    useEffect(()=>{
          // if(CurrencyPair){
          //   CurrencyData()
          // }
          // else if(CurrencyPair = undefined){
          //   CurrencyData()
          // }
          AllCurrenctData()
          // CurrencyData()
      }, [])
}

export default FetchCurrency
