"use client";
import React, { useState } from "react";
import Result from "./Result";
import { useRouter } from "next/navigation";

const Form = () => {
    const [name, setNmae] = useState("");
    const navigate = useRouter();
    // const obj = {
    //     name: name,
    //     age, age
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name)
        if(!name){
            throw new Error("Plese Enter the valid name !!!")
        }
        else{
            navigate.push(`/result/${name}`);
        }
    };

    // console.log(name)
    return (
        <div className="flex m-10 justify-center">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-5 ">
                    <input
                        type="text"
                        placeholder="Enter the name"
                        value={name}
                        onChange={(e) => setNmae(e.target.value)}
                        className="p-2 border-purple-800 border rounded-2xl "
                    />
                    <button
                        type="submit"
                        className="bg-purple-400 text-black px-5 py-2 rounded-3xl"
                    >
                        Submit
                    </button>
                </div>
            </form>
            
            {/* <Result name={name}/> */}
        </div>
    );
};

export default Form;
