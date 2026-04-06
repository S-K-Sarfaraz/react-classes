import React from 'react'
import LaguageProvider from './laguageProvider'
import ThemeProvider from './ThemeProvider'

const CombineProviders = ({children}) => {
  return (
    <LaguageProvider>
        <ThemeProvider>
            {children}
        </ThemeProvider>
    </LaguageProvider>
  )
}

export default CombineProviders