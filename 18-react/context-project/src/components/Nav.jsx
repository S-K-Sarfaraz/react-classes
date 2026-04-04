import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeContext } from '../context/ThemeProvider'

const Nav = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <div className={`flex justify-between p-5 rounded-3xl text-3xl ${theme==='Light'? 'bg-gray-300': 'bg-gray-800'}`}>
        <div className='text-blue-600'>React Classes</div>
        <div>
            <Nav2/>
        </div>
    </div>
  )
}

export default Nav