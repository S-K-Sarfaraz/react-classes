import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import NotFoundPage from './pages/NotFoundPage'
import ProductDetail from './pages/ProductDetail'

const App = () => {
  useEffect(()=>{
    // call api
    // responce 
  },[])
  return (
    <div className='h-screen bg-gray-950 text-white'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:productId' element={<ProductDetail/>}/>


        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </div>
  )
}

export default App