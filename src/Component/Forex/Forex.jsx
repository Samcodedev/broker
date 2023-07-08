import React, {useState} from 'react'
import './Forex.css'
import DataTable from '../Reuse_Component/DataTable'

const Forex = () => {

  
  const [period, periodFunc] = useState()
  const [time, timeFunc] = useState()

  let pairs = {
    pair1: "USD",
    pair2: "GBP",
    pair3: "EUR",
    pair4: "JPY",
    pair5: "AUD",
    pair6: "CAD",
  }

  const url = `https://twelve-data1.p.rapidapi.com/time_series?symbol=${pairs.pair2}/${pairs.pair1}%2C%20${pairs.pair3}/${pairs.pair4}%2C%20${pairs.pair1}/${pairs.pair4}%2C%20${pairs.pair5}/${pairs.pair4}%2C%20${pairs.pair6}/${pairs.pair4}%2C%20${pairs.pair3}/${pairs.pair1}%2C%20${pairs.pair2}/${pairs.pair5}%2C%20${pairs.pair5}/${pairs.pair4}&interval=${time? time : "30min"}&outputsize=${period? period : 14}&format=json`

  function calling(data, data2){
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

export default Forex
