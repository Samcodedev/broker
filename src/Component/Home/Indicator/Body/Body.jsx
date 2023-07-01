import React, { useEffect, useState } from 'react'
import './Body.css'

const Body = () => {

  const [data, dataFunc] = useState()
  const [time, timeFunc] = useState(null)

  async function indicator(){
    const url = 'https://global-stock-market-api-data.p.rapidapi.com/most_active_countrywise_by_technical/usa';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd064065a6amshb059169a3069fb0p15443bjsnbf019d4664e5',
        'X-RapidAPI-Host': 'global-stock-market-api-data.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      dataFunc(
        result.map((item) =>{
          // return(
            let setTime;
            if(time === "hourly"){
              setTime = item.hourly
            }
            else if(time === "weekly"){
              setTime = item.weekly
            }
            else if(time === "monthly"){
              setTime = item.monthly
            }
            else if(time === "yearly"){
              setTime = item.yearly
            }
            else if(time === null){
              setTime = item.hourly
            }
          if(item.hourly === 'Strong Buy'){
            // BuyColorFunct("green")
            return(
              <tr>
                <td>{item.name} (hrs)</td>
                <td><button style={{color: 'green', backgroundColor: 'rgba(109, 255, 109, 0.596)', border: '1.5px solid rgba(109, 255, 109, 0.596)'}}>{setTime}</button></td>
              </tr>
            )
          }
          else if(item.hourly === 'Strong Sell'){
            return(
              <tr>
                <td>{item.name} (hrs)</td>
                <td><button style={{color: 'red', backgroundColor: 'rgba(250, 176, 176, 0.842)', border: '1.5px solid rgba(250, 176, 176, 0.842)'}}>{setTime}</button></td>
              </tr>
            )
          }
          else if(item.hourly === 'Buy'){
            return(
              <tr>
                <td>{item.name} (hrs)</td>
                <td><button style={{color: 'green', backgroundColor: 'rgba(109, 255, 109, 0.596)', border: '1.5px solid rgba(109, 255, 109, 0.596)'}}>{setTime}</button></td>
              </tr>
            )
          }
          else if(item.hourly === 'Sell'){
            return(
              <tr>
                <td>{item.name} (hrs)</td>
                <td><button style={{color: 'red', backgroundColor: 'rgba(250, 176, 176, 0.842)', border: '1.5px solid rgba(250, 176, 176, 0.842)'}}>{setTime}</button></td>
              </tr>
            )
          }
          else{
            return(
              <tr>
                <td>{item.name} (hrs)</td>
                <td><button style={{color: 'gray', backgroundColor: 'rgba(179, 179, 179, 0.842)', border: '1.5px solid rgba(179, 179, 179, 0.842)'}}>{setTime}</button></td>
              </tr>
            )
          }
          
            
          // )
        })
      )
    } catch (error) {
      console.error(error);
    }
  }

  const PeriodFunc = (period) =>{
    timeFunc(period.target.value)
  }
  console.log(time)

  useEffect(()=>{
    indicator()
  })

  return (
    <div className='body-table'>
      <table>
        <thead>
          <tr>
              <th>set time frame</th>
              <th>
                <select onChange={PeriodFunc}>
                  <option value="hourly">hourly</option>
                  <option value="weekly">weekly</option>
                  <option value="monthly">monthly</option>
                  <option value="yearly">yearly</option>
                </select>
              </th>
            </tr>
        </thead>
        <tbody>
            
            {data}
        </tbody>
      </table>
    </div>
  )
}

export default Body
