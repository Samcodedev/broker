import React, {useEffect, useState} from 'react'
import './Table.css'
import { Link } from 'react-router-dom'

const Table = (props) => {
    const data = [
        "Currency","T-Frame", "Date/Time", "Open", "Close", "High", "Low", "Chart"
    ]
    const th = data.map((item) =>{
        return(
            <th>{item}</th>
        )
    })
    console.log(props.period)
    console.log(props.time)



    const [tableData, tableDataFunc] = useState()
    const [tableData2, tableDataFunc2] = useState()
    let time = props.time;
    let period = props.period;
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
    //twelve-data1.p.rapidapi.com/time_series?symbol=${pairs.pair2}/${pairs.pair1}%2C%20${pairs.pair3}/${pairs.pair4}%2C%20${pairs.pair1}/${pairs.pair4}%2C%20${pairs.pair5}/${pairs.pair4}%2C%20${pairs.pair6}/${pairs.pair4}%2C%20${pairs.pair3}/${pairs.pair1}%2C%20${pairs.pair2}/${pairs.pair5}%2C%20${pairs.pair5}/${pairs.pair4}
    // %2C%20${pairs.pair7}%2C%20${pairs.pair1}/${pairs.pair8}%2C%20${pairs.pair3}/${pairs.pair8}%2C%20${pairs.pair5}/${pairs.pair8}%2C%20${pairs.pair6}/${pairs.pair8}%2C%20${pairs.pair2}/${pairs.pair8}%2C%20${pairs.pair9}/${pairs.pair1}%2C%20${pairs.pair9}/${pairs.pair5}%2C%20${pairs.pair9}/${pairs.pair3}%2C%20${pairs.pair9}/${pairs.pair2}%2C%20${pairs.pair10}/${pairs.pair4}%2C%20${pairs.pair11}/${pairs.pair1}%2C%20${pairs.pair12}/${pairs.pair6}%2C%20${pairs.pair1}/${pairs.pair13}&interval=1day&outputsize=30&format=json
    
    async function BoardData(){
        const url = `https://twelve-data1.p.rapidapi.com/time_series?symbol=${pairs.pair2}/${pairs.pair1}%2C%20${pairs.pair3}/${pairs.pair4}%2C%20${pairs.pair1}/${pairs.pair4}%2C%20${pairs.pair5}/${pairs.pair4}%2C%20${pairs.pair6}/${pairs.pair4}%2C%20${pairs.pair3}/${pairs.pair1}%2C%20${pairs.pair2}/${pairs.pair5}%2C%20${pairs.pair5}/${pairs.pair4}&interval=${time? time : "30min"}&outputsize=${period? period : 14}&format=json`;
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
                            <td><Link to="/chart" state={{id: meta.symbol}}><button>chart</button></Link></td>
                        </tr>
                    )
                })
            )

            // console.log(result);
        } catch (error) {
            console.error(error);
        }
    }


    async function BoardData2(){
        const url = `https://twelve-data1.p.rapidapi.com/time_series?symbol=%2C%20${pairs.pair1}/${pairs.pair8}%2C%20${pairs.pair3}/${pairs.pair8}%2C%20${pairs.pair5}/${pairs.pair8}%2C%20${pairs.pair2}/${pairs.pair8}%2C%20${pairs.pair9}/${pairs.pair1}%2C%20${pairs.pair9}/${pairs.pair5}%2C%20${pairs.pair9}/${pairs.pair3}%2C%20${pairs.pair9}/${pairs.pair2}&interval=${time? time : "30min"}&outputsize=${period? period : 14}&format=json`;
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
            
            tableDataFunc2(
                val.map((item) =>{
                    console.log(item)
                    let data = item.values[0]
                    let meta = item.meta
                    return(
                        <tr>
                            <td>{meta.symbol}</td>
                            <td>{meta.interval}</td>
                            <td>{period}</td>
                            <td>{data.datetime}</td>
                            <td>{data.open}</td>
                            <td>{data.close}</td>
                            <td>{data.high}</td>
                            <td>{data.low}</td>
                            <td><button>chart</button></td>
                        </tr>
                    )
                })
            )
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        // BoardData()
    },[])



  return (
    <div className='main-table'>
        <button onClick={BoardData}>click</button>
        <button onClick={BoardData2}>click2</button>
        <table>
            <thead>
                <tr>
                    {th}
                </tr>
            </thead>
            <tbody>
                {tableData}
                {tableData2}
            </tbody>
        </table>
    </div>
  )
}

export default Table