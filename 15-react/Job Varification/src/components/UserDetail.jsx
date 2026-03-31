import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        setLoading(true);
        const fetchUser = async () => {
            try {
                const responce = await axios.get(
                    `https://jsonplaceholder.typicode.com/users/${id}`,
                );
                console.log(responce);
                setUser(responce.data);
            } catch (error) {
                console.error("Error facing", error);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, [id]);

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    // if (!user) {
    //     return <div>User Not Found</div>;
    // }
    // console.log(id)
    return (
        <div>
            <div>
                {loading ? (
                    "Loading..."
                ) : user ? (
                    <div>
                        <div>{user.name}</div>
                        <div>{user.username}</div>
                        <div>{user.email}</div>
                    </div>
                ) : (
                    <div>User Not found</div>
                )}
            </div>
            {/* <div>
                {user.name}
            </div>
             <div>
                {user.username}
            </div> */}
        </div>
    );
};

export default UserDetail;
