import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Table.css'

const Table = (props) => {

    const tr = props.Table_rows
    const tr2 = props.Table_rows2

    const th = (props.Table_header).map((item) =>{
        return(
            <th>{item}</th>
        )
    })


  return (
    <div className='table'>
      <table>
        <thead>
            <tr>
                {th}
            </tr>
        </thead>
        <tbody>
            {tr}
            {tr2}
        </tbody>
      </table>
    </div>
  )
}

export default Table
