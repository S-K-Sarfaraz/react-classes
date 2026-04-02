import React, { useContext } from 'react'
import { UserData } from '../context/UserDataContext'
import Button from './Button'

const User = () => {
  const [user] = useContext(UserData)
    // console.log(props.name)
  return (
    <div>User {user}
    <Button/>
    </div>
  )
}

export default User