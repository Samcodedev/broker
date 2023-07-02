import React from 'react'
import List from '../../../Comp/List'

const Navigation = (props) => {
    const data = [
        "Stock",
        "Forex",
        "Crypto"
    ]


    function route(data){
      console.log(data)
      props.data(data)
    }

    const nav = data.map((item) =>{
        return(
            <List 
                currency={item}
                func={route}
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
