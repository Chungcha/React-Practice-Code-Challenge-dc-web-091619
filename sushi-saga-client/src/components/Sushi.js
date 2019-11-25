import React, { Fragment } from 'react'
import picture1 from "../assets/RJGr3Xs.png"
import picture2 from "../assets/sushi-slice_29.png"
import picture3 from "../assets/sushi-slice_75.png"
import picture4 from "../assets/sushi-slice_99.png"

const Sushi = (props) => {
  let num = Math.floor(Math.random()*4)+1
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={()=>props.eatSushi(props.sushi.id)}>
        {props.sushi.eaten === true ? null : <img src={picture1} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi