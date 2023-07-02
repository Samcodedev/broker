import React, {useState} from 'react'
import Curent from '../../../Comp/Curent'
import './CurrentData.css'
// import Fetch from '../../../Fetch'


const CurrentData = (props) => {
  const [price, priceFunc] = useState()
  console.log(props.data)
  // let data = props.data

  // setTimeout(() => {
  // let data = props.data
  //   priceFunc(
  //     data.map((item) =>{
  //       console.log(item)
  //       // return(
  //       //   <Curent 
  //       //     price={item}
  //       //     type="open"
  //       //   />
  //       // )
  //     })
  //   )
  // }, 500);

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
        {/* <Curent 
          price={data[1]}
        /> */}
      </div>
      <button>Strong Buy</button>
    </div>
  )
}

export default CurrentData
