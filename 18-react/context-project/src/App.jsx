import React, { useContext } from 'react'
import Nav from './components/Nav'
import { ThemeContext } from './context/ThemeProvider'

const App = () => {
  const {theme} = useContext(ThemeContext)

  return (
    <div className={`p-5 h-screen ${theme==='Light'? 'bg-gray-200 text-black': 'bg-gray-950 text-white'}`}>
      <Nav/>
    </div>
  )
}

export default App