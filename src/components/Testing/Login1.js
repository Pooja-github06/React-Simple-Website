// src/features/auth/Login.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './authSlice';

const Login1 = () => {
    const dispatch = useDispatch();
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const authStatus = useSelector((state) => state.auth.status);

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(credentials));
    };

    return (
        <>
            <h1>jjjjjjjjjjjjjjjjj</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" value={credentials.username} onChange={handleChange} />
                <input type="password" name="password" value={credentials.password} onChange={handleChange} />
                <button type="submit">Login</button>
                {authStatus === 'loading' && <p>Loading...</p>}
            </form>

        </>
    );
};

export default Login1;
