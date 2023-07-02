import React, { useEffect, useState } from 'react'
import List from '../../../Comp/List'
import './Navigation.css'

const Navigation = (props) => {

  const [route, routefunc] = useState()
  const [PairData, PairDataFunc] = useState()
  
    const data = [
      {
        list: "GBP/USD"
      },
      {
        list: "EUR/USD"
      },
      {
        list: "GBP/JPY"
      },
      {
        list: "USD/CAD"
      },
      {
        list: "XAU/USD"
      },
      {
        list: "AUD/CAD"
      }
    ]

    function get_data(data){
      routefunc(data)
      console.log(route)
    }

    // so now i will be fetching the data of the selected route

    // fetching currency data
    async function CurrencyData(){
      const url = `https://twelve-data1.p.rapidapi.com/time_series?symbol=${route? route : "GBP/USD"}&interval=30min&outputsize=14&format=json`;
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
          let val = result.values[0]
          let meta = result.meta

          
            val.map((item) =>{
              PairDataFunc(
                item
              )
            })
          
            console.log(meta)
          // if this do not work i will try mapping the val
          
      } catch (error) {
          console.error(error);
      }
  }
  props.data(PairData)
  console.log(PairData)
    
    // sending data the list component and receiving the clicked component
    const navigation = data.map((item) =>{
      return(
        <List 
          currency={item.list}
          route={item.list}
          func={get_data}
        />
      )
    })

    // useEffect(()=>{
    //   CurrencyData()
    // },[])

  return (
    <div className='navigation'>
      {navigation}
      <button onClick={CurrencyData}>click</button>
    </div>
  )
}

export default Navigation
