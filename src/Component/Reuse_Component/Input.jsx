import React, { useEffect, useState } from 'react'
import './Input.css'

const Input = (props) => {
  const [period, periodFunction] = useState()
  const [time, timeFunction] = useState()

  useEffect(() =>{
      periodFunction(14)
      timeFunction("30min")
  }, [])

  function refresh(){
    periodFunction(getPeriod)
    timeFunction(getTime)
  }

  const [getPeriod, getPeriodFunc] = useState()
  const [getTime, getTimeFunc] = useState()


  const PeriodFunc = (period) =>{
    getPeriodFunc(period.target.value)
  }

  const TimeFunc = (time) =>{
    getTimeFunc(time.target.value)
  }

  props.funct(period, time)

  return (
    <div className='input'>
      <input type="number" placeholder='Input period' onChange={PeriodFunc} />
      <select name="" id="" onChange={TimeFunc}>
        <option value="1min">1min</option>
        <option value="5min">5min</option>
        <option value="15min">15min</option>
        <option value="30min">30min</option>
        <option value="45min">45min</option>
        <option value="1h">1hour</option>
        <option value="2h">2hour</option>
        <option value="4h">4hour</option>
        <option value="1day">1day</option>
        <option value="1week">1week</option>
        <option value="1month">1month</option>
      </select>
      <button onClick={refresh}>refresh</button>
    </div>
  )
}

export default Input
