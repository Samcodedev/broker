import React from 'react'
import './Body.css'
import Table from './Table/Table'
import News from './News/News'
import Navigation from './Navigation/Navigation'
import CurrentData from './CurrentData/CurrentData'

const Body = () => {

  return (
    <div className='body'>
      <Navigation />
      <CurrentData />
      <News />
      <Table />
    </div>
  )
}

export default Body
