import React, { useState } from "react";

const App = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const [task, setTask] = useState([]);

    const submitNote = (e) => {
        e.preventDefault();

        const copyTask = [...task];

        copyTask.push({ title, desc });

        setTask(copyTask);
        console.log(task);

        setTitle("");
        setDesc("");
    };

    const deleteNote = (index) => {
        console.log(index)
        const copyNote = [...task]; // [1,2,3,5,6] arr.splice(3,1)

        copyNote.splice(index, 1);

        setTask(copyNote);
    };
    return (
        <div className="m-5">
            <div className="text-2xl font-bold mb-3">Add Note</div>
            <form>
                <div className="flex flex-col gap-3 w-1/2">
                    {/* Title */}
                    <input
                        type="text"
                        placeholder="Enter the title..."
                        className="h-3 border p-3 rounded hover:bg-gray-100"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                    />

                    {/* Description */}
                    <textarea
                        type="text"
                        placeholder="Enter the Description..."
                        className="border p-3 rounded h-30 hover:bg-gray-100"
                        value={desc}
                        onChange={(e) => {
                            setDesc(e.target.value);
                        }}
                    />

                    {/* submit button */}
                    <button
                        className="rounded border font-bold bg-blue-300 active:bg-blue-700"
                        onClick={(e) => {
                            submitNote(e);
                        }}
                    >
                        Submit
                    </button>
                </div>
            </form>

            <div>
                <div className="text-2xl font-bold mb-3 mt-7">All Notes</div>
                <div className="flex gap-4 flex-wrap">
                    {task.map((e, index) => {
                        return (
                            <div
                                key={index}
                                className="bg-gray-100 h-60 w-50 border p-4 rounded-2xl"
                            >
                                <div className="text-2xl font-semibold">
                                    {e.title}
                                </div>
                                <div>
                                    {e.desc}
                                    {index}
                                </div>
                                <div className="flex justify-center relative">
                                    <button
                                        onClick={() => deleteNote(index)}
                                        className="absolute top-30 px-4 py-1 bg-red-400 rounded-2xl text-white"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default App;

//  Note jo ban raha hai us per ek button lagana hai delete ka jab us per click karun to wo wala note delete ho jaye
//  splice array
