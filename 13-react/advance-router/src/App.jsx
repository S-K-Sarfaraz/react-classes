import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import Mobile from './pages/Mobile'
import Laptop from './pages/laptop'
import PC from './pages/pc'
import Course from './pages/Course'
import Course1 from './pages/Course1'
import Nav2 from './components/nav2'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
  return (
    <div className='bg-gray-950 h-screen text-white'>
      <Navbar/>
      <Nav2/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products' element={<Products/>}>
          <Route path='mobile' element={<Mobile/>}/>
          <Route path='laptop' element={<Laptop/>}/>
          <Route path='pc' element={<PC/>}/>
        </Route>
        <Route path='/course' element={<Course/>}/>
        <Route path='course1' element={<Course1/>}/>



        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </div>
  )
}

export default App