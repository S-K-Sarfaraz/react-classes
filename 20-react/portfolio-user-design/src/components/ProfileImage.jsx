import React from 'react'
import profileImage from './../assets/1000023325.png'

const ProfileImage = () => {
  return (
    <div className=''>
        <img className='rounded-full h-30 w-30' src={profileImage} alt="" />
    </div>
  )
}

export default ProfileImage