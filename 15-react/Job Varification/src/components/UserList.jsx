import React from "react";
import { Link, useLocation } from "react-router-dom";

const UserList = () => {
    const location = useLocation();
    // console.log(location)
    const users = location.state?.users || [];
    console.log(users);

    return (
        <div>
            <div>{users.length == 0 ? <span>No users found</span> : ""}</div>
            <div className="flex gap-3 flex-wrap m-5">
                {users.map((user) => (
                    <Link key={user.id} to={`/user/${user.id}`}>
                        <div className="flex h-50 w-30 p-3 gap-3 bg-amber-200 flex-wrap text-black">
                            {user.name}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default UserList;
