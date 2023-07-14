import React, {useState} from 'react'
import Curent from '../../../Comp/Curent'
import './CurrentData.css'


const CurrentData = (props) => {
  const [price, priceFunc] = useState()
  let data = props.data

  // setTimeout(() => {
  // // let data = props.data
  //   priceFunc(
  //     data.map((item) =>{
  //       let  value = Object.values(item)
  //       for(let i=0; i<value; i++){
  //         return(
  //           <Curent 
  //             price={value[i]}
  //             // type="open"
  //           />
  //         )
  //       }
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
