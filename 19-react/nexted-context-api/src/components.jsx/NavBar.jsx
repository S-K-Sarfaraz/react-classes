import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeProvider'

const NavBar = () => {

    const theme = useContext(ThemeContext)

  return (
    <div>{theme === "English"? "how are you?": "आप कैसे हैं?"}</div>
  )
}

export default NavBar