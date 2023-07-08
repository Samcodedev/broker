import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Input from './Input'
import Table from '../Reuse_Component/Table'
import './DataTable.css'

const DataTable = (props) => {

  // url links
  const url_link = props.url
  const url_link2 = props.url2

  const [period, periodFunc] = useState()
  const [time, timeFunc] = useState()
  //store table data value
  let [tableData, tableDataFunc] = useState(null)
  let [tableData2, tableDataFunc2] = useState()
  //fetch more currency torque
  const [more_pair, more_pairFunc] = useState(true)

  //get period and time value
  function calling(data, data2){
    periodFunc(data)
    timeFunc(data2)
  }

  const Table_header = [
    "Currency","T-Frame", "Period", "Date/Time", "Open", "Close", "High", "Low", "Chart"
  ]
    
    async function BoardData(){
        const url = url_link;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
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
                    let warning = item
                    if(data){
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
                            <td><Link to="/chart" state={{id: meta.symbol}}><button>chart</button></Link></td>
                        </tr>
                      )
                    }else if(data === undefined){
                      return(
                        <tr>
                          <td>{warning}</td>
                        </tr>
                      )
                    }
                })
            )
        } catch (error) {
            console.error(error);
        }
    }


    async function BoardData2(){
        const url = url_link2;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
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
                    let warning = item
                    if(data){
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
                            <td><Link to="/chart" state={{id: meta.symbol}}><button>chart</button></Link></td>
                        </tr>
                      )
                    }else if(data === undefined){
                      return(
                        <tr>
                          <td>{warning}</td>
                        </tr>
                      )
                    }
                })
            )
        } catch (error) {
            console.error(error);
        }
        more_pairFunc(!more_pair)
    }

    useEffect(()=>{
        if(tableData === null){
            BoardData()
        }
        else{
            BoardData()
        }
        BoardData()
    },[time, period])







  return (
    <div className='table'>
      <Input 
        funct ={calling}
      />
      <Table 
        Table_header={Table_header}
        Table_rows={tableData}
        Table_rows2={tableData2}
      />
      <span onClick={BoardData2} style={{display: more_pair? 'block' : 'none' }}>more...</span>
    </div>
  )
}

export default DataTable
