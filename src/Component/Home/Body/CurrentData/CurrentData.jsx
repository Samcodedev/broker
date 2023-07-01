import React from 'react'
// import Curent from '../../../Comp/Curent'
import './CurrentData.css'
// import Fetch from '../../../Fetch'


const CurrentData = (props) => {
  // const [price, priceFunc] = useState()

  // setTimeout(() => {
    // const currentDatas = [props.data]
    // let arr = Object.values(currentDatas)



    // priceFunc(
    //   arr.map((item) =>{
    //     for(let i=0; i<5; i++){
          // return(
            // <Curent 
            //   price={item[i]}
            //   type="open"
            // />
            // console.log(item[i])
          // )
  //       }
  //     })
  //   )
  // }, 500)
  


  return (
    <div className='current-data'>
      <div className="price">
        {/* {price} */}
      </div>
      <button>Strong Buy</button>
    </div>
  )
}

export default CurrentData
