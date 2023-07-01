import React, { useState } from 'react'
import './Table.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import FetchCurrency from '../../../FetchCurrency';
// import CurrentData from '../CurrentData/CurrentData';

const Table = (props) => {
    const data = [
        "Currency","T-Frame", "Date/Time", "Open", "Close", "High", "Low"
    ]

    const th = data.map((item) =>{
        return(
            <th>{item}</th>
        )
    })

    const [tableData, tableDataFunc] = useState()

    let pairs = {
        pair1: "USD",
        pair2: "GBP",
        pair3: "EUR",
        pair4: "JPY",
        pair5: "AUD",
        pair6: "CAD",
  // AUD
        pair7: "USOIL",
        pair8: "CHF",
        pair9: "XAU",
        pair10: "TRY",
        pair11: "XTZ",
        pair12: "NZD",
        pair13: "NGN",
      }

    async function BoardData(){
        const url = `https://twelve-data1.p.rapidapi.com/time_series?symbol=${pairs.pair2}/${pairs.pair1}%2C%20${pairs.pair3}/${pairs.pair4}%2C%20${pairs.pair1}/${pairs.pair4}%2C%20${pairs.pair5}/${pairs.pair4}%2C%20${pairs.pair6}/${pairs.pair4}%2C%20${pairs.pair3}/${pairs.pair1}%2C%20${pairs.pair2}/${pairs.pair5}%2C%20${pairs.pair5}/${pairs.pair4}&interval=30min&outputsize=14&format=json`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'd064065a6amshb059169a3069fb0p15443bjsnbf019d4664e5',
                'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            let val = Object.values(result)
            
            tableDataFunc(
                val.map((item) =>{
                    console.log(item)
                    let data = item.values[0]
                    let meta = item.meta
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
                })
            )

            // console.log(result);
        } catch (error) {
            console.error(error);
        }
    }


  return (
    <div className='table'>
        <button onClick={BoardData}>click</button>
      <table>
        <thead>
            <tr>
                {th}
            </tr>
        </thead>
        <tbody>
            <tr>
                {tableData}
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
