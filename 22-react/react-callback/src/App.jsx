import { useCallback, useState } from 'react'
import './App.css'
import ChieldComponent from './components/ChieldComponent'

function App() {
  const [count, setCout] = useState(0)

  const increament = () => {
    setCout(count+1)
  }

  const example = useCallback(() => {  
    return 'Differnt'
  }, [])
  return (
    <>
      <h1>hello {count}</h1>
      <button onClick={increament}>Increament</button>
      <br />
      <br />
      <ChieldComponent alternate = {'Alternate'} increament={increament}/>
    </>
  )
}

export default App
