import React, { useEffect, useState } from 'react'
import List from '../../../Comp/List'
import './Navigation.css'

const Navigation = (props) => {

  const [route, routefunc] = useState(null)
  
    const data = [
      {
        list: "GBP/USD"
      },
      {
        list: "USD/JPY"
      },
      {
        list: "EUR/USD"
      },
      {
        list: "USD/JPY"
      },
      {
        list: "AUD/JPY"
      },
      {
        list: "EUR/CAD"
      },
      {
        list: "EUR/JPY"
      }
    ]

    function get_data(data){
      routefunc(data)
      console.log(route)
    }

    props.data(route? route : 'GBP/USD')
    console.log(route? route : 'GBP/USD')
    
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

  return (
    <div className='navigation'>
      {navigation}
    </div>
  )
}

export default Navigation
