import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../feature/toto/todoSlice'

const Todos = () => {
    const todos = useSelector(state => state.todos)
    const dispatc = useDispatch()
    console.log(todos)
  return (
    <div className='max-w-150 min-w-80 flex justify-center'>
        <div className='list-none'>
        {todos.map((todo) => (
            <li kay={todo.id} className='mt-4 flex justify-center items-center bg-gray-600 px-4 py-2 rounded'>
                <div>{todo.text}</div>
                <button onClick={() => dispatc(removeTodo(todo.id))}>Delete</button>
            </li>
        ) )}
    </div>
    </div>
  )
}

export default Todos