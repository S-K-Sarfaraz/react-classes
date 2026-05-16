import Result from '@/components/Result'
import React from 'react'

const ResultPageName = async ({ params }) => {
    const { username } = await params
    // console.log(userName)

    const ref = await fetch(`https://api.genderize.io/?name=${username}`)
    const userData = await ref.json()
    console.log(userData)
    const percen = userData.probability * 100

  return (
    <div className='flex flex-col'>
        <p>
            This is the userName: {username}
        </p>
        <p>
            Gender: {userData.gender}
        </p>
        <p>
            Percentage: {percen}%
        </p>
    </div>
  )
}

export default ResultPageName