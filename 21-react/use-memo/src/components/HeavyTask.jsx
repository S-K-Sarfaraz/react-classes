// import React, {  useMemo } from 'react'

const HeavyTask = () => {
    const heavy = () => {
        let sum = 0
        for(let i = 0; i <= 10000000 ; i++){
            sum = sum + i // 55
            // console.log(sum)
        }  
        return sum
    }
    // const total = useMemo(() => {
    //     return heavy()
    // }, [])
    const total = heavy()

  return (
    <div className='bg-amber-200 px-20 py-10 text-black text-5xl'>
        This is the heavy Function {total}
    </div>
  )
}

export default HeavyTask