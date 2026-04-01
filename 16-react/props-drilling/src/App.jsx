import React, { useState } from 'react'
import Frontend from './components/frontend'

const App = () => {
  const [name, setName] = useState('sakib')
  return (
    <div>
      <Frontend name={name}/>
    </div>
  )
}

export default App