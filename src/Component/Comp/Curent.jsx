import React from 'react'
import style from './Current.module.scss'

const Curent = (props) => {
  function color(){
    if(props.color === "green"){
      return("green")
    }
    else if(props.color === "red"){
      return("red")
    }
    else{
      return("")
    }
  }
  return (
    <div className={style.current}>
        <h3 style={{color: color()}}>{props.price}</h3>
        <p>current {props.type}</p>
    </div>
  )
}

export default Curent
