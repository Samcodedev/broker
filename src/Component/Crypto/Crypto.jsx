import React, { useState } from 'react'
import Input from './Inputs/Input'
import Table from './Table/Table'
import './Crypto.css'

const Crypto = () => {

  const [period, periodFunc] = useState()
  const [time, timeFunc] = useState()

  function calling(data, data2){
    periodFunc(data)
    timeFunc(data2)
  }

  return (
    <div className='forex'>
      <Input 
        funct ={calling}
      />
      <Table 
        period={period}
        time={time}
      />
    </div>
  )
}

export default Crypto
