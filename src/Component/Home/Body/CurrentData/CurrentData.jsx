import React from 'react'
import Curent from '../../../Comp/Curent'
import './CurrentData.css'

const CurrentData = () => {
    const data =[
      {
        price: 1.2694,
        type: "open"
      },
      {
        price: 1.4863,
        type: "close"
      },
      {
        price: 1.8532,
        type: "high"
      },
      {
        price: 1.1753,
        type: "low"
      },
      {
        price: 1.0865,
        type: "volume"
      }
    ]
  
    const currency = data.map((item) =>{
      return(
        <Curent 
          price={item.price}
          type={item.type}
        />
      )
    })
  return (
    <div className='current-data'>
        <div className="price">
            {currency}
        </div>
        <button>Strong Buy</button>
    </div>
  )
}

export default CurrentData
