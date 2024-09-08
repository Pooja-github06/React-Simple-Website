import React, { useState } from "react";
import "./login.css"
// import { Button } from "@mui/material";
import { navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// import { loginUser } from "../../Features/Login/LoginSlice";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const style = {
    // position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    left: 10,

    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const Login = ({ navigation }) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate()

    //   const isLoading = useSelector(state => state.user.loading);

    const dispatch = useDispatch()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const { email, password } = user;
    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })


    // const [user, setUser] = useState({
    //     email: "",
    //     password: ""
    // })

    // const [user1, setUser1] = useState({
    //     email: "",
    //     password: ""
    // })

    // const handleChange = e => {
    //     console.log(e.target);

    //     const { name, value } = e.target;

    //     // setUser(
    //     //     {
    //     //         ...user,
    //     //         [name]: value
    //     //     }
    //     // )
    //     setUser((prev) => {
    //         return { ...prev, [name]: value }
    //     })

    // }

    // const handleChange = e => {
    //     console.log(e.target);

    //     const { name, value } = e.target;

    //     // setUser(
    //     //     {
    //     //         ...user,
    //     //         [name]: value
    //     //     }
    //     // )
    //     setUser1((prev) => {
    //         return { ...prev, [name]: value }
    //     })

    // }


    // const handlesubmit = async (e) => {
    //     // handleOpen()
    //     e.preventDefault();
    //     // console.log(user)
    //     const { email, password } = user;

    //     const addUser = { email, password };

    //     try {
    //         // await dispatch(registerUser(newUser)).unwrap();
    //         // dispatch(addUser({ username: username, email: email, password: password }))

    //         await dispatch(loginUser(addUser)).unwrap();
    //         // console.log(token,)
    //         // await dispatch(verifyToken(token));

    //         // navigate("/About")
    //         // navigation.navigate('/About', {
    //         //     itemId: 86,
    //         //     otherParam: 'anything you want here',
    //         // });
    //         //   await dispatch(verifyToken(token));
    //         // user successfully registered and token verified/authenticated
    //         // maybe redirect to home page? 🤷🏻‍♂️ world is your oyster.
    //     } catch (error) {
    //         console.error(error);
    //     }


    //     // let array = []
    //     // array.push(user, user1)
    //     // console.log(array)

    // }

    return (

        <div className="login">

            <h2>Login</h2>
            <input type="text" name="email" value={email}
                onChange={e => onChange(e)} placeholder="Enter email"></input>
            <input type="password" name="password" value={password} placeholder="Enter password" onChange={e => onChange(e)}></input>

            {/* <input type="text" placeholder="Enter text"></input> */}
            <div className="button"
            // onClick={(e) => { handlesubmit(e) }}s
            >
                Login</div>
            <div>or</div>
            <div className="button" onClick={() => navigate("/Register")}>Register</div>



        </div>

    )
}
export default Login;



// import { useState } from 'react';



