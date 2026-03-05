import React from 'react'

const Card = (props) => {
    console.log(props.kay)


  return (
    <div className='parent'>
        <div className="card">
            <h2>{props.icon}</h2>
            <h1 className='username'>{props.name}</h1>
            <p className='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat </p>
            <p>Age: {props.age}</p>
            <button className='contact'>Contact</button>
        </div>
    </div>
  )
}

export default Card