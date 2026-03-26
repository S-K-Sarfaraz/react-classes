import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='h-15 text-gray-800 font-bold p-5 flex justify-between bg-amber-200'>
        <div>Raect-Router</div>
        <div className='flex gap-5'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/products'>Products</Link>
            {/* <Link to='/course'>Course</Link> */}

          {/* <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar