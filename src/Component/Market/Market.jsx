import React, { useState } from 'react'
import Navigation from './Navigation/Navigation'
import News from './News/News'
import './Market.css'
// import Fetch from '../Fetch'

const Market = () => {
  const [newsData, newsDataFunc] = useState()

  // accepting data from child component FETCH
  function FetchData(data){
    newsDataFunc(data)
  }

  console.log("testing news", newsData)

  return (
    <div className='market'>
      <Navigation 
        data={FetchData}
      />

      <News 
        displayData={newsData}
      />
    </div>
  )
}

export default Market
