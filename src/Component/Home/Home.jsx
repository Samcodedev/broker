import React from 'react'
import Body from './Body/Body'
import './Home.css'
import Indicator from './Indicator/Indicator'

const Home = () => {
  return (
    <div className='home' >
      <Body />
      <Indicator />
    </div>
  )
}

export default Home