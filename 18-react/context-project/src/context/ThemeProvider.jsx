import React, { createContext, useState } from 'react'


export const ThemeContext =  createContext()

const ThemeProvider = (props) => {

    const [theme, setTheme] = useState('Dark')

    const toggleTheme =() => {
        setTheme((prev) => (prev === 'Dark'? 'Light' : 'Dark'))
    }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider