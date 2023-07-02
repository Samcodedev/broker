import React, { useState } from 'react'
import './Body.css'
import Table from './Table/Table'
import News from './News/News'
import Navigation from './Navigation/Navigation'
import CurrentData from './CurrentData/CurrentData'

const Body = () => {

  const [data, dataFunc] = useState()

  function currentData(data){
    dataFunc(data)
    // console.log("tee", data)
  }

  // console.log("body", data)

  return (
    <div className='body'>
      <Navigation 
        data={currentData}
      />
      <CurrentData 
        data={data}
      />
      <News />
      <Table 
        // data={data}
      />
    </div>
  )
}

export default Body
