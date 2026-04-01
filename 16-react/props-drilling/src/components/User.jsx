import React from 'react'

const User = (props) => {
    console.log(props.name)
  return (
    <div>User {props.name}</div>
  )
}

export default User