import React, { useState } from 'react'
import List from '../../../Comp/List'
import './Navigation.css'
import FetchCurrency from '../../../FetchCurrency'

const Navigation = (props) => {

  const [route, routefunc] = useState()
  
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
    }

    function fetching(data){
      props.data(data)
      // console.log("navigation", data)
    }
    
    const navigation = data.map((item) =>{
      return(
        <List 
          currency={item.list}
          route={item.list}
          func={get_data}
        />
      )
    })
  return (
    <div className='navigation'>
      <FetchCurrency 
        CurrencyPair={route}
        currentData={fetching}
      />
      {navigation}
    </div>
  )
}

export default Navigation
