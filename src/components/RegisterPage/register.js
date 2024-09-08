// import { Axios } from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./register.css"
// import { addUser, removeUser, registerUser, verifyToken } from "../../Features/Register/RegisterSlice";
import { Button } from "bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';
import { registerUser } from "../../Features/Register/RegisterSlice";

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.user);

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const { username, email, password } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(username, email, password));
    };

    // const submit = async (e) => {
    //     console.log(data22, 'dataaaaa')

    //     const { username, email, password } = formData;
    //     const newUser = { username, email, password };

    //     try {
    //         // await dispatch(registerUser(newUser)).unwrap();
    //         // dispatch(addUser({ username: username, email: email, password: password }))

    //         const token = await dispatch(registerUser(newUser)).unwrap();
    //         // console.log(token,)
    //         await dispatch(verifyToken(token));
    //         navigate("/Login")

    //         //   await dispatch(verifyToken(token));
    //         // user successfully registered and token verified/authenticated
    //         // maybe redirect to home page? 🤷🏻‍♂️ world is your oyster.
    //     } catch (error) {
    //         console.error(error);
    //     }

    // }

    return (
        <div className="register">
            <h2>Register</h2>
            <input type="text" name="username" value={username}
                onChange={e => onChange(e)}
                // onChange={(e) => setUsername(e.target.value)} 
                placeholder="Your name"></input>
            {/* <Button onClick={submit()} ></Button> */}
            <input type="text" name="email" value={email}
                onChange={e => onChange(e)}
                //  onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"></input>
            <input type="password" name="password" value={password}
                onChange={e => onChange(e)}
                // onChange={(e) => setPassword(e.target.value)} 
                placeholder="Enter password"></input>
            {/* <input type="password" name="password" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Re-enter Password"></input> */}
            <div className="button" onClick={() => { handleSubmit() }}>Register</div>
            <div>or</div>
            <div className="button"
            // onClick={submit}
            // onClick={() => navigate("/Login")}
            >Login</div>

        </div >
    )
}
export default Register;