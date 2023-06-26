import React from 'react'
import style from './List.module.scss'

const List = (props) => {

  return (
    <div className={style.list_group}>
      <span>
        <h4>{props.currency}</h4>
        <div className={style.line}></div>
      </span>
    </div>
  )
}

export default List
