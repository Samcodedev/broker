import React from 'react'
import './Table.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Table = () => {
    const data = [
        "Name", "Time Frame", "Gain", "Lost", "Volume", "Open", "Close"
    ]

    const th = data.map((item) =>{
        return(
            <th>{item}</th>
        )
    })
  return (
    <div className='table'>
      <table style={{width: "100%", height: "200px"}}>
        <thead>
            <tr>
                {th}
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
            </tr>
            <tr>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
            </tr>
            <tr>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
            </tr>
            <tr>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
            </tr>
            <tr>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
            </tr>
            <tr>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
            </tr>
            <tr>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
            </tr>
            <tr>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
            </tr>
            <tr>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
            </tr>
            <tr>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
            </tr>
            <tr>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
            </tr>
            <tr>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
            </tr>
            <tr>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
                <td>1.936652</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
