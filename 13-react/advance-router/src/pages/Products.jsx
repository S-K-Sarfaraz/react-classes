import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
    return (
        <div className="flex justify-center items-top h-screen gap-10">
            <Link
                to="/products/mobile"
                className="h-15 cursor-pointer active:scale-95 w-30 bg-amber-300 text-black p-5 mt-2 justify-center items-center text-center rounded-4xl"
            >
                Mobile
            </Link>
            <Link
                to="/products/laptop"
                className="h-15 cursor-pointer active:scale-95 w-30 bg-amber-300 text-black p-5 mt-2 justify-center items-center text-center rounded-4xl"
            >
                Laptop
            </Link>
            <Link
                to="/products/pc"
                className="h-15 cursor-pointer active:scale-95 w-30 bg-amber-300 text-black p-5 mt-2 justify-center items-center text-center rounded-4xl"
            >
                PC
            </Link>
            <Outlet />
        </div>
    );
};

export default Products;
