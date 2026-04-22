import React from 'react'
import { memo } from 'react'

const ChieldComponent = (props) => {
    console.log('Chield component trigger !!!')
    console.log(props.increament)
  return (
    <div>
        <h2>{props.alternate}</h2>
        <button onClick={props.increament}>Another Increament Button</button>
    </div>
  )
}

export default memo(ChieldComponent)