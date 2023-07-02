import React from 'react'
import Navigation from './Navigation/Navigation'
import Body from './Body/Body'
import './Indicator.css'

const Indicator = () => {
  function route(data){
    console.log(data)
  }
  return (
    <div className='indicator'>
      {/* <Navigation 
        data={route}
      /> */}
      <Body />
    </div>
  )
}

export default Indicator
