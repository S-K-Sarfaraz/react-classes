import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeProvider'

const Nav2 = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <div className='flex gap-5'>
        <div>Home</div>
        <div>About</div>
        <div>Contact</div>
        <button onClick={toggleTheme}>{theme}</button>
    </div>
  )
}

export default Nav2