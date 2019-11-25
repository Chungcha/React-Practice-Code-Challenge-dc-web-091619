import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from "../components/Sushi"

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.shownSushi.map(sushi=> {
          return <Sushi sushi={sushi} key={sushi.id} id={sushi.id} eatSushi={props.eatSushi}/>
          })}
        <MoreButton renderMoreSushi={props.renderMoreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer