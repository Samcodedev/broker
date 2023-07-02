import React, { useState } from 'react'
import './News.css'
import NewsCard from '../../Comp/NewsCard'

const News = (props) => {
    const data = props.displayData
    const loading = [
        {
            newsTitle: "Loading",
            shotDesc: " ",
            postedOn: " "
        }
    ]
    const [newsCard, newsCardFunc] = useState()



    setTimeout(() => {
        
        const get = (data? data : loading).map((item) =>{
            return(
                <NewsCard 
                    newsTitle={item.newsTitle}
                    shotDesc={item.shotDesc}
                    postedOn={item.postedOn}
                />
            )
        })
        newsCardFunc(get)
    }, 300);
  return (
    <div className='main-news'>
      {newsCard}
    </div>
  )
}

export default News
