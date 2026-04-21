import React, { useRef, useState } from "react";

const Reference = () => {
    const [name, setNmae] = useState("");
    const [password, setPassword] = useState('')

    const inputOne = useRef()
    const inputTwo = useRef()

    const getStartButton = () => {
        console.log('Hello')
        console.log(inputOne.current)
        inputOne.current.style.width = '5000px'
    }
    const getEndButton = () => {
        console.log('World')
        console.log(inputTwo.current)
        const refTwo = inputTwo.current
        refTwo.style.backgroundColor = 'purple'
    }

    return (
        <div>
            <h1 className="text-black text-5xl">Login Form</h1>
            <div className="flex flex-col w-100 gap-6">
                <input
                    ref={inputOne}
                    className=" bg-yellow-200 mt-10 text-black "
                    type="text"
                    value={name}
                    onChange={(e) => {
                        setNmae(e.target.value);
                    }}
                />
                <input
                ref={inputTwo}
                    className=" bg-yellow-200 mt-10 text-black "
                    type="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <button onClick={getStartButton} className="bg-gray-400 text-black px-7 py-2 rounded">start</button>
                <button onClick={getEndButton} className="bg-gray-400 text-black px-7 py-2 rounded">end</button>
            </div>
        </div>
    );
};

export default Reference;
