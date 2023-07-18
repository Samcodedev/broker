import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Table.css'

const Table = ({Table_rows,Table_header,Table_rows2}) => {

    let tr = Table_rows
    const tr2 = Table_rows2

    console.log(tr)

    const th = (Table_header).map((item) =>{
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
