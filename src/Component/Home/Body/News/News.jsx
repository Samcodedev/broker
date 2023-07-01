import React from 'react'
import './News.css'
import { Link } from 'react-router-dom'

const News = () => {
  return (
    <div className='news'>
      <h4>News</h4>
      <p>Get latest, popular and trending news on Forex, Stock, Crypto and economical news going on in the world.</p>
      <Link to="/market"><button>Check More</button></Link>
    </div>
  )
}

export default News
