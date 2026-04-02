import React, { createContext, useState } from 'react'

export const UserData = createContext()

const UserDataContext = (props) => {
    const [user, setUser] = useState('sakib')
  return (
    <UserData.Provider value={[user,setUser]}>
        {props.children}
    </UserData.Provider>
  )
}

export default UserDataContext