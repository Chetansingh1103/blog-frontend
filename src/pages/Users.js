import React, { useState, useEffect } from 'react';
import UserCard from '../Components/Users/UserCard';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from '../redux/actions/userActions';

const Users = () => {

    const users = useSelector(state => state.user.users)
    const token = useSelector(state => state.auth.token)
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getAllUsers(token));

    }, [])

    return (
        <div style={{marginTop: "80px"}}>
            <h1 style={{ margin: "20px", textAlign: "center"}}>Users</h1>
            <div style={{ padding: "20px",gap: "20px", display: "flex", flexWrap: "wrap"}}>
                {
                    users && users.map((user) => (
                        <UserCard key={user._id} userData={user}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Users;