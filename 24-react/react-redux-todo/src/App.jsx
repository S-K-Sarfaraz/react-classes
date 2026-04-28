import React from "react"
import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"
function App() {

  return (
    <>
      <div className="bg-gray-950 h-screen">
        <AddTodo/>
        <Todos/>
      </div>
    </>
  )
}

export default App
