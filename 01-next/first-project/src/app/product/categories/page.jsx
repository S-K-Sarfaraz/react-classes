
import Link from "next/link";
import React from "react";

const Categories = () => {
    const products = [
        { id: "mobile", name: "Mobile" },
        { id: "laptop", name: "Laptop" },
        { id: "cloths", name: "Cloths" },
    ];
    
    return (
        <div className="flex text-4xl my-5 mx-5 font-bold">
            <ul className="flex flex-col gap-4">
                {products.map((product) => (
                    <li key={product.id}>
                        <Link href={`/product/categories/${product.id}`}>
                            {product.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
