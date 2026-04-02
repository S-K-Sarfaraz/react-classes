import React, { useContext } from 'react'
import { UserData } from '../context/UserDataContext'

const Button = () => {
    const [user, setUser] = useContext(UserData)
    function changeName (){
        setUser('sarfaraz')
    }
  return (
    <div className='button' onClick={()=>{changeName()}}>
        Change Name
    </div>
  )
}

export default Button