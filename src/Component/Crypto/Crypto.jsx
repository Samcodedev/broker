import React, { useState } from 'react'
import './Crypto.css'
import DataTable from '../Reuse_Component/DataTable'

const Crypto = () => {
  
  const [period, periodFunc] = useState()
  const [time, timeFunc] = useState()

  let pairs = {
    pair1: "BTC",
    pair2: "USD",
    pair3: "ETH",
    pair4: "LTC",
    pair5: "BCH",
    pair7: "TRX",
    pair8: "XRP",
    pair9: "USD"
  }
  
  
  const url = `https://twelve-data1.p.rapidapi.com/time_series?symbol=${pairs.pair1}/${pairs.pair2}%2C%20${pairs.pair3}/${pairs.pair2}%2C%20${pairs.pair3}/${pairs.pair1}%2C%20${pairs.pair4}/${pairs.pair2}%2C%20${pairs.pair1}/${pairs.pair9}%2C%20${pairs.pair5}/${pairs.pair2}%2C%20${pairs.pair7}/${pairs.pair3}%2C%20${pairs.pair8}/${pairs.pair2}&interval=${time? time : "30min"}&outputsize=${period? period : 14}&format=json`

  function time_period(data, data2){
    periodFunc(data)
    timeFunc(data2)
  }

  return (
    <div className='forex'>
      <DataTable 
        url={url}
        pair={pairs}
      />
    </div>
  )
}

export default Crypto
