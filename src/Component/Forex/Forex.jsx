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

  const url = `https://twelve-data1.p.rapidapi.com/time_series?symbol=${pairs.pair2}/${pairs.pair1},${pairs.pair3}/${pairs.pair4},${pairs.pair1}/${pairs.pair4},${pairs.pair5}/${pairs.pair4},${pairs.pair6}/${pairs.pair4},${pairs.pair3}/${pairs.pair1},${pairs.pair2}/${pairs.pair5},${pairs.pair5}/${pairs.pair4}`

  function time_period(data, data2){
    periodFunc(data)
    timeFunc(data2)
  }


  return (
    <div className='forex'>
      <DataTable 
        url={url}
        pair={pairs}
        time_period={time_period}
      />
    </div>
  )
}

export default Forex
