// import React, { useMemo, useState } from "react";
import HeavyTask from "./components/HeavyTask";
import Counter from "./components/Counter";
import Reference from "./components/Reference";

const App = () => {
    // const [count, setCount] = useState(0);

    // const increment = () => {
    //     setCount(count + 1);
    // };

    // const heavy = () => {
    //     let sum = 0;
    //     for (let i = 0; i <= 100000000; i++) {
    //         sum = sum + i; // 55
    //     }
    //     return sum;
    // };
    // const total = useMemo(() => {
    //     return heavy()
    // }, [])
    // const total = heavy();

    return (
        <div className="bg-gray-300 text-white h-screen">
            {/* <div className="flex justify-center items-center gap-5 h-screen flex-col">
                <div className="text-3xl bg-red-300 text-black py-5 px-7 rounded">{total}</div>
                <div className="flex flex-col rounded bg-amber-300 text-black py-2 px-5">
                    <button
                        onClick={increment}
                        className="bg-blue-400 px-3 py-2 rounded"
                    >
                        increase
                    </button>
                    <div className="text-3xl text-center">{count}</div>
                </div>
            </div> */}
            <Reference/>
        </div>
    );
};

export default App;
