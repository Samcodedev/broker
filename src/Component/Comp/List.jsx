import React from 'react'
import style from './List.module.scss'

const List = (props) => {

  // let route = props.route

  // selecting and sending the selected route to the parent component
  function select(){
    props.func("route")
  }

  return (
    <div className={style.list_group} onClick={select}>
      <span tabIndex={1}>
        <h4>{props.currency}</h4>
        <div id={style.line} ></div>
      </span>
    </div>
  )
}

export default List
