import React from 'react'
import List from '../../../Comp/List'
import './Navigation.css'

const Navigation = () => {
  
    const data = [
      {
        currency: "GBP/USD"
      },
      {
        currency: "EUR/USD"
      },
      {
        currency: "GBP/JPY"
      },
      {
        currency: "USD/CAD"
      },
      {
        currency: "XAU/USD"
      },
      {
        currency: "AUD/CAD"
      }
    ]
    
    const navigation = data.map((item) =>{
      return(
        <List 
          currency={item.currency}
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
