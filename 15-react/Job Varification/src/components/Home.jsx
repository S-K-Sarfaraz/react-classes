import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [loading, setLoading] = useState(false);
    const nevigatee = useNavigate()

    const getUser = async () => {
        setLoading(true);
        try {
            const responce = await axios.get(
                "https://jsonplaceholder.typicode.com/users",
            );
            nevigatee('/users', {state: {users: responce.data}})
            // console.log(responce.data);
        } catch (error) {
            console.error("Error Feting data from api", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div>
                <button
                    onClick={() => {
                        getUser();
                    }}
                    className="bg-yellow-400 text-black text-2xl rounded-2xl px-5 py-2"
                >
                    {loading ? <span>Loading...</span> : "Get User"}
                </button>
            </div>
        </div>
    );
};

export default Home;
