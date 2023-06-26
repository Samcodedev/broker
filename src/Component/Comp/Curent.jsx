import React from 'react'
import style from './Current.module.scss'

const Curent = (props) => {
  return (
    <div className={style.current}>
        <h3>{props.price}</h3>
        <p>current {props.type}</p>
    </div>
  )
}

export default Curent
