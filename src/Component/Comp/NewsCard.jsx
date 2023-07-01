import React from 'react'
import './NewsCard.css'

const NewsCard = (props) => {
  return (
    <div className='news-card'>
      <h3>{props.newsTitle}</h3>
      <p>{props.shotDesc}</p>
      <p>{props.postedOn}</p>
    </div>
  )
}

export default NewsCard
