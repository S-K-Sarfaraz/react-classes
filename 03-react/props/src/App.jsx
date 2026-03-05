import React from 'react'
import Card from './components/Card'
import {House, LampDesk} from 'lucide-react'


const App = () => {
  const data = [
    {
      username:'sakib',
      age: 21,
      icon: <House/>
    },
    {
      username:'sarfaraz',
      age: 23,
      icon: <LampDesk/>
    },
    {
      username:'najish',
      age: 25,
      icon: <House/>
    },
    {
      username: 'gaurav',
      age: 32,
      icon: <House/>
    }
  ]
  return (
    <div className='rootcard'>
      {data.map((user, index)=>{
        return (
          <div key={index}> 
            <Card name={user.username} age={user.age} icon={user.icon}/>
          </div>
        )
      })}
    </div>
  )
}

export default App