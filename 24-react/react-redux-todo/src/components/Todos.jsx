import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, updateTodo } from '../feature/toto/todoSlice'

const Todos = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    
    const [editId, setEditId] = useState(null)
    const [editText, setEditText] = useState('')

    const handleEditClick = (todo) => {
        setEditId(todo.id)
        setEditText(todo.text)
    }

    const handleUpdate = (id) => {
        if (editText.trim()) {
            dispatch(updateTodo({ id, text: editText }))
            setEditId(null)
        }
    }

  return (
    <div className='max-w-150 min-w-80 flex justify-center w-full'>
        <div className='list-none w-full max-w-2xl'>
        {todos.map((todo) => (
            <li key={todo.id} className='mt-4 flex justify-between items-center bg-gray-600 px-4 py-2 rounded gap-4'>
                {editId === todo.id ? (
                    <div className="flex gap-2 w-full">
                        <input 
                            type="text" 
                            value={editText} 
                            onChange={(e) => setEditText(e.target.value)} 
                            className="bg-gray-800 rounded border border-gray-700 text-white px-3 py-1 outline-none focus:border-indigo-500 w-full"
                        />
                        <button onClick={() => handleUpdate(todo.id)} className="text-white bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-md">Save</button>
                        <button onClick={() => setEditId(null)} className="text-white bg-gray-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-md">Cancel</button>
                    </div>
                ) : (
                    <>
                        <div className='text-white flex-1 text-left'>{todo.text}</div>
                        <div className="flex gap-2">
                            <button onClick={() => handleEditClick(todo)} className="text-white bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-md">Edit</button>
                            <button onClick={() => dispatch(removeTodo(todo.id))} className="text-white bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-md">Delete</button>
                        </div>
                    </>
                )}
            </li>
        ) )}
    </div>
    </div>
  )
}

export default Todos