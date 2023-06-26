import React from 'react'
import Curent from '../../../Comp/Curent'
import './CurrentData.css'

const CurrentData = () => {
    const data =[
      {
        price: 1.2694,
        type: "high",
        color: "green"
      },
      {
        price: 1.4863,
        type: "low",
        color: "red"
      },
      {
        price: 1.8532,
        type: "open",
        color: "gray"
      },
      {
        price: 1.1753,
        type: "close",
        color: "gray"
      },
      {
        price: 1.0865,
        type: "volume",
        color: "gray"
      }
    ]
  
    const currency = data.map((item) =>{
      return(
        <Curent 
          price={item.price}
          type={item.type}
          color={item.color}
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
