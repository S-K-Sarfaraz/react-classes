import React, { createContext } from 'react'

export const ThemeContext = createContext()

const ThemeProvider = ({children}) => {
  return (
    <ThemeContext.Provider value={'hindi'}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider