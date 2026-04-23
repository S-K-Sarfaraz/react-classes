import React, { useCallback, useEffect, useState } from "react";

const App = () => {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPasswrod] = useState("");

    const passwordGenerator = useCallback(() => {
        let pass = "";
        let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if (numberAllowed) {
            alphabet = alphabet + "0123456789";
        }

        if (charAllowed) {
            alphabet = alphabet + "!@#$%^&*-_+=[]{}~`";
        }

        for (let i = 1; i <= length; i++) {
            let random = Math.floor(Math.random() * alphabet.length + 1);
            pass += alphabet.charAt(random);
        }

        setPasswrod(pass);
    }, [length, numberAllowed, charAllowed, setPasswrod]);

    // passwordGenerator()
    useEffect(()=>{
      passwordGenerator()
    }, [length, numberAllowed, charAllowed, passwordGenerator])

    

    return (
        <div className="bg-gray-950 h-screen text-white flex justify-center pt-30">
            <div className="bg-gray-700 h-50 w-200 rounded-2xl">
                <div className="flex justify-center text-3xl pt-2 text-blue-500">
                    Password Generator
                </div>
                <div className="flex justify-center mt-3">
                    <div className="rounded-l-lg bg-gray-500 overflow-hidden mb-3 ">
                        <input
                            type="text"
                            placeholder="password"
                            className="outline-none py-1 px-3 justify-center w-150"
                            value={password}
                            readOnly
                        />
                    </div>
                    <div className="px-5 py-1 rounded-r-lg h-8 bg-blue-500">
                        <button>
                          Copy
                        </button>
                    </div>
                </div>
                <div className="flex">
                    <div className="ml-20 mt-5">
                        <input
                            id="passwordrange"
                            type="range"
                            min={8}
                            max={50}
                            onChange={(e)=>{setLength(e.target.value)}}
                        />
                        <label
                            className="ml-2 text-green-500 text-center"
                            htmlFor="passwordrange"
                        >
                            Length
                        </label>
                    </div>
                    <div className="ml-20 mt-5">
                        <input
                            id="numberadded"
                            type="checkbox"
                            min={8}
                            max={50}
                            onChange={()=>{setNumberAllowed((prev)=> !prev)}}
                        />
                        <label
                            className="ml-2 text-green-500 text-center"
                            htmlFor="numberadded"
                        >
                            Number
                        </label>
                    </div>
                    <div className="ml-20 mt-5">
                        <input
                            id="charadded"
                            type="checkbox"
                            min={8}
                            max={50}
                            onChange={()=>{setCharAllowed((prev) => !prev)}}
                        />
                        <label
                            className="ml-2 text-green-500 text-center"
                            htmlFor="charadded"
                        >
                            Character
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
