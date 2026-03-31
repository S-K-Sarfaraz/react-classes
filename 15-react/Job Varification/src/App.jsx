import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import UserList from './components/UserList'
import UserDetail from './components/UserDetail'

const App = () => {
  return (
    <div className='min-h-screen p-10 bg-gray-950 text-white font-sans'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<UserList />} />
        <Route path='/user/:id' element={<UserDetail />} />
      </Routes>
    </div>
  )
}

export default App