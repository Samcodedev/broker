import React, { useEffect, useState } from 'react'
import './Body.css'
// import Table from './Table/Table'
import Table from '../../Reuse_Component/Table'
import News from './News/News'
import Navigation from './Navigation/Navigation'
import CurrentData from './CurrentData/CurrentData'

const Body = () => {

  const [selectedNav, selectedNavFunc] = useState()
  const [currentSelcted, currentSelctedFunc] = useState()
  const [Table_rows_data, Table_rows_dataFunc] = useState(null)
  const time = '30min'
  const period = 14

  function currentData(data){
    selectedNavFunc(data)
  }

  const Table_header = [
    "Currency","T-Frame", "Date/Time", "Open", "Close", "High", "Low"
  ]

  let forex_pair = {
    pair1: "GBP/USD,",
    pair2: "USD/JPY,",
    pair3: "EUR/USD,",
    pair4: "USD/JPY,",
    pair5: "AUD/JPY,",
    pair6: "EUR/CAD",
    pair7: "EUR/JPY"
  }



  async function FetchCurrency(){
    const URL = `https://twelve-data1.p.rapidapi.com/time_series?symbol=${forex_pair.pair1}%2C%20${forex_pair.pair2}%2C%20${forex_pair.pair3}%2C%20${forex_pair.pair4}%2C%20${forex_pair.pair5}%2C%20${forex_pair.pair6}%2C%20${forex_pair.pair7}&interval=${time? time : '30min'}&outputsize=1&format=json`;
    const options = {
        method: 'GET',
        headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(URL, options);
        const result = await response.json();
        let val = Object.values(result)
            
        Table_rows_dataFunc(
            val.map((item) =>{
                let data = item.values[0]
                let meta = item.meta

                console.log(data)
                if(data){
                  return(
                    <tr>
                        <td>{meta.symbol}</td>
                        <td>{meta.interval}</td>
                        <td>{data.datetime}</td>
                        <td>{data.open}</td>
                        <td>{data.close}</td>
                        <td>{data.high}</td>
                        <td>{data.low}</td>
                    </tr>
                  )
                }
                else{
                  return(
                    <tr>
                      <td>sorry you have exceed the max data delivery try again later</td>
                    </tr>
                  )
                }
            })
        )

        //current data condition
        val.map((item) =>{
          const symbol = item.meta.symbol
          if(selectedNav === symbol){
            currentSelctedFunc(item.values)
            console.log(item.values)
          }
        })
    } catch (error) {
        console.error(error);
    }
}

// useEffect(()=>{
//   FetchCurrency()
// },[Table_rows_data])

  return (
    <div className='body'>
    <button onClick={FetchCurrency}>click</button>
      <Navigation 
        data={currentData}
      />
      <CurrentData 
        data={currentSelcted}
      />
      <News />
      <Table 
        Table_header={Table_header}
        Table_rows={Table_rows_data}
      />
    </div>
  )
}

export default Body
