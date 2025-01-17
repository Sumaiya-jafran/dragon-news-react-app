import React from 'react';
import { useLoaderData } from "react-router"
import User from './User';
const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h2>{users.length}</h2>
            <div>
                {
                    users.map(user=> <User key={user._id} user={user} users ={users}></User>)
                }
            </div>
        </div>
    );
};

export default Users;