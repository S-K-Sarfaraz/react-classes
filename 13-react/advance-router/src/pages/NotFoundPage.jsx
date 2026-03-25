import React, { useEffect, useState } from 'react'

const NotFoundPage = () => {
  const text = '404, page not found.'
  const [displayText, setDisplayText] = useState('')

  useEffect(()=>{
    let idx = 0

    const interval = setInterval(()=>{
      setDisplayText(text.slice(0, idx))
      idx++

      if(idx > text.length){
        clearInterval(interval)
      }
    }, 100)
    console.log(displayText)
    return () => clearInterval(interval)
  },[])

  return (
    <div className='flex justify-center items-center bg-gray-950'>
      <div className='flex text-4xl text-white'>
        <div>{displayText}</div>
        <span className='bg-amber-300 h-[40px] w-[14px] ml-1 animate-pulse'></span>
      </div>
    </div>
  )
}

export default NotFoundPage