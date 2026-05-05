import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-center mt-5'>
        <div className='bg-pink-300 text-black flex justify-center font-bold py-5 px-20 text-2xl rounded-2xl'>
            <ul className='list-none flex justify-center gap-5'>
                <Link href='/'>
                    <li className='cursor-pointer hover:text-blue-500'>Home</li>
                </Link>
                <Link href='/about'>
                    <li className='cursor-pointer hover:text-blue-500'>About</li>
                </Link>
                <Link href='/contacts'>
                    <li className='cursor-pointer hover:text-blue-500'>Contact</li>
                </Link>
                <Link href='/product'>
                    <li className='cursor-pointer hover:text-blue-500'>Product</li>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Header