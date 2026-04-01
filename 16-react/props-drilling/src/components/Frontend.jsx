import React from 'react'
import NavBar from './NavBar'

const Frontend = (props) => {

    // console.log(props.name)
  return (
    <div className='frontend'>
        Frontend
        <div>
            <NavBar name={props.name}/>
        </div>
    </div>
    
  )
}

export default Frontend