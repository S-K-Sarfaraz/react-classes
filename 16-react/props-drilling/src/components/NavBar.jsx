import React from 'react'
import SideBar from './SideBar'

const NavBar = (props) => {
  return (
    <div className='navbar'>
        Nav Bar 
        <SideBar name={props.name}/>
    </div>
  )
}

export default NavBar