import React from 'react'
import { Link, Outlet, useNavigate } from "react-router-dom";
const Course = () => {
    const nevigate = useNavigate()

  return (
    <div>
        <div className="flex justify-center items-top h-screen gap-10">
            <div
                onClick={()=>{
                    nevigate('/course1')
                }}
                className="h-15 cursor-pointer active:scale-95 w-30 bg-green-300 text-black p-5 mt-2 justify-center items-center text-center rounded-4xl"
            >
                Home
            </div>
            <Outlet/>
        </div>
    </div>
  )
}

export default Course