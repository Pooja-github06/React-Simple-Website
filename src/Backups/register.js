// import { Axios } from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./register.css"
import { addUser, removeUser } from "../../Features/Register/RegisterSlice";
import { Button } from "bootstrap";

const Register = () => {
    const data22 = useSelector(state => state.data)

    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    // const [user, setUser] = useState({
    //     name: "",
    //     email: "",
    //     password: "",
    //     reEnterpassword: ""
    // })

    // const handleChange = e => {
    //     // console.log(e.target);
    //     // const newdata = { ...user }
    //     // const { name, value } = e.target;
    //     // newdata[e.target.name] = e.target.value;
    //     // setUser(newdata)
    //     // console.log(newdata);

    // }

    const submit = e => {
        console.log(data22, 'dataaaaa')
        // alert('11')
        // e.prevenDefault();
        // Axios.post("http://localhost:500/test", {
        //     name: user.name,
        //     email: user.email,
        //     password: user.password

        // }).then((res) => {
        //     console.log(res);

        // })
        dispatch(addUser(input))
        setInput('')
    }

    return (
        <div className="register">
            <h2>Register</h2>
            <input type="text" name="Name" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Your name"></input>
            <Button onClick={submit()} ></Button>
            <input type="text" name="email" value={user.email} onChange={(e) => handleChange(e)} placeholder="Your email"></input>
            <input type="password" name="password" value={user.password} onChange={(e) => handleChange(e)} placeholder="Enter password"></input>
            <input type="password" name="password" value={user.reEnterpassword} onChange={(e) => handleChange(e)} placeholder="Re-enter Password"></input>
            {/* <div className="button" onSubmit={submit}>Registeeeer</div> 
            <div>or</div>
            <div className="button" onClick={submit}>Login</div>
            {
                data22.map((item) => (
                    <>
                        <li key={item.id}>{item.text}</li>
                        <button onClick={() =>
                            dispatch(removeUser(item.id))
                        }>X</button>
                    </>
                )
                )
            }
        </div >
    )
}
export default Register;