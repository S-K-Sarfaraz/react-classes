import React from 'react'

const ProfileButton = (props) => {
    const color = props.btnColor
    const btntext = props.btnText
    const textColor = props.text
  return (
    <div className={`${color} ${textColor} rounded-full w-fit px-8 py-2`}>
        {btntext}
    </div>
  )
}

export default ProfileButton