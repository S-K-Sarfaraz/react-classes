import Result from '@/components/Result'
import React from 'react'

const ResultPageName = async (props) => {
    const params = await props.params
    const userName = params.username
    // console.log(userName)

    const ref = await fetch(`https://api.genderize.io/?name=${userName}`)
    const userData = await ref.json()
    console.log(userData)
    const percen = userData.probability * 100

  return (
    <div className='flex flex-col'>
        <p>
            This is the userName: {userName}
        </p>
        <p>
            Gender: {userData.gender}
        </p>
        <p>
            Percentage: {percen}
        </p>
    </div>
  )
}

export default ResultPageName