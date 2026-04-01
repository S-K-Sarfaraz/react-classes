import React from 'react'
import User from './User'

const SideBar = (props) => {
  return (
    <div className='sidebar'>
        Side Bar
        <User name={props.name}/>
    </div>
  )
}

export default SideBar