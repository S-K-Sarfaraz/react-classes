import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = ()=> {
        setCount(count+1)
    }
  return (
    <div className='bg-green-500 flex flex-col gap-2 px-20 py-10 text-black text-5xl'>
        <button className='px-5 py-3 rounded-2xl bg-blue-500 text-white' onClick={increment}>Increase</button>
        Counter {count}
    </div>
  )
}

export default Counter