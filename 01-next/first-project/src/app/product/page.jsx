import Link from 'next/link'
import React from 'react'

const Product = () => {
  return (
    <div className='flex justify-center mt-5 text-4xl font-bold'>
        <Link href='/product/categories'>
            <h1 className='mx-2 cursor-pointer hover:text-pink-400'>Categories</h1>
        </Link>
        <Link href='/product/brand'>
            <h1 className='mx-2 cursor-pointer hover:text-pink-400'>Brands</h1>
        </Link>
        <Link href='/product/sales'>
            <h1 className='mx-2 cursor-pointer hover:text-pink-400'>Sales</h1>
        </Link>
        <Link href='/product/grocries'>
            <h1 className='mx-2 cursor-pointer hover:text-pink-400'>Grocries</h1>
        </Link>
    </div>
  )
}

export default Product