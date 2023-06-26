import React from 'react'
import List from '../../../Comp/List'

const Navigation = () => {
    const data = [
        "Technical Indicator",
        "Moving Average"
    ]

    const nav = data.map((item) =>{
        return(
            <List 
                currency={item}
            />
        )
    })
  return (
    <div className='navigation'>
      {nav}
    </div>
  )
}

export default Navigation
