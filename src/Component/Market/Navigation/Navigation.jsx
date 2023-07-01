import React, {useState} from 'react'
import List from '../../Comp/List'
import Fetch from '../../Fetch'
import './Navigation.css'

const Navigation = (props) => {

  const [route, routefunc] = useState()
  // const [click, clickFunc] = useState()

  // news navigation datas and fetching extensions
    const data = [
        {
          list: "Lates News",
          route: "/latest_news"
        },
        {
          list: "Most Popular News",
          route: "/most_popular_news"
        },
        {
          list: "Forex News",
          route: "/forex_news/1"
        },
        {
          list: "Cryptocurrency News",
          route: "/cryptocurrency_news/1"
        },
        {
          list: "Stock Market News",
          route: "/stock_market_news/1"
        },
        {
          list: "Economy News",
          route: "/economy_news/1"
        },
        {
          list: "Economy Indicators News",
          route: "/economy_indicators_news/1"
        }
        
    ]

    // accepting route from the child component LIST
    function get_data(data){
      console.log(data)
      // sending to the FETCH component
      routefunc(data)
      // sending to the parent component MARKET
      // props.data(data)
    }

    function fetching(data){
      props.data(data)
    }

    const navigation = data.map((item) =>{
      return(
        <List 
          currency={item.list}
          route={item.route}
          func={get_data}
        />
      )
    })
  return (
    <div className='navigation'>
      <Fetch 
        news={route}
        Fdata={fetching}
      />
      {navigation}
    </div>
  )
}

export default Navigation
