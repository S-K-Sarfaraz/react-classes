import React, { useState } from 'react'

const Card = () => {
    const [num, setNum] = useState(100) // async task
    const [user, setUser] = useState(['sakib', 23])
    function increase(){
        setNum(num) // async task
        console.log('increase ker diya mai....', num) // sync task 
    }
    function userChange(){
        const changedUser = [...user]
        changedUser[0] = 'sarfaraz'
        changedUser[1] = 20
        setUser(changedUser)
    }
  return (
    <div style={{margin: '20px', padding: '10px', display: 'flex', gap:'20px' }}>
        <h2>{num}</h2>
        <button onClick={increase}>
            Click me 
        </button>
        <h3>{user[0]}</h3>
        <h3>{user[1]}</h3>
        <button onClick={userChange}>change the user</button>
    </div>
  )
}

export default Card