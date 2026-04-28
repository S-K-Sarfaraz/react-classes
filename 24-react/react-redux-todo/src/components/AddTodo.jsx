import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/toto/todoSlice";

const AddTodo = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const addTodoSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput("");
    };

    return (
        <div>
            <form onSubmit={addTodoSubmit} className="pt-12">
                <div className="flex justify-center gap-5">
                    {/* <label className="text-gray-300 mr-2 text-center text-xl" htmlFor="">Enter you To-Do Tasl:</label> */}
                    <input
                        type="text"
                        placeholder="Enter you to-do task..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="bg-gray-800 rounded border border-gray-700 text-white focus:border-indigo-500 outline-none py-1 px-3 leading"
                    />
                    <button
                        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                        type="submit"
                    >
                        Add Todo
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTodo;
