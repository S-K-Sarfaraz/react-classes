import React, { useEffect, useState } from "react";
import axios from 'axios'

const App = () => {
    const [num, setNum] = useState(0);
    const [num2, setNum2] = useState(10);

    // const callApi = async () => {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    //     const data = await response.json()

    //     console.log(data)
    // }

    const axiosApi = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
      console.log(response)
    }

    useEffect(() => {
        // callApi()
        axiosApi()
    },[num]);

    return (
        <div>
            <h1>{num}</h1>
            <button
                onClick={() => {
                    setNum(num + 1);
                }}
            >
                Click me
            </button>

            <h1>{num2}</h1>
            <button
                onClick={() => {
                    setNum2(num2 + 10);
                }}
            >
                click me again
            </button>
        </div>
    );
};

export default App;
