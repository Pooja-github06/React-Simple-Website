// import React, { useState } from "react";
import "../LoginPage/login.css"
// import { Button } from "@mui/material";

// const Contact = () => {
//     const [user, setUser] = useState({
//         email: "",
//         password: ""
//     })

//     const [user1, setUser1] = useState({
//         email: "",
//         password: ""
//     })

//     const handleChange = e => {
//         console.log(e.target);

//         const { name, value } = e.target;

//         // setUser(
//         //     {
//         //         ...user,
//         //         [name]: value
//         //     }
//         // )
//         setUser((prev) => {
//             return { ...prev, [name]: value }
//         })

//     }

//     // const handleChange = e => {
//     //     console.log(e.target);

//     //     const { name, value } = e.target;

//     //     // setUser(
//     //     //     {
//     //     //         ...user,
//     //     //         [name]: value
//     //     //     }
//     //     // )
//     //     setUser1((prev) => {
//     //         return { ...prev, [name]: value }
//     //     })

//     // }


//     const handlesubmit = (e) => {
//         e.preventDefault();
//         // console.log(user)
//         // let array = []
//         // array.push(user, user1)
//         // console.log(array)

//     }

//     return (

//         <div className="login">

//             <h2>Contact</h2>
//             <input type="text" name="name" value={user.name} placeholder="Enter name" onChange={handleChange}></input>
//             <input type="text" name="email" value={user.email} placeholder="Enter email" onChange={handleChange}></input>
//             <input type="message" name="message" value={user.message} placeholder="Enter message" onChange={handleChange}></input>

//             {/* <input type="text" placeholder="Enter text"></input> */}
//             {/* <div className="button" onClick={(e) => { handlesubmit(e) }}>Login</div> */}
//             {/* <div>or</div> */}
//             <div className="button">Submit</div>




//         </div>

//     )
// }
// export default Contact;



// // import { useState } from 'react';



// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Contact = () => (
    <div>
        {/* <h1>Contact Us !</h1> */}
        <Formik
            initialValues={{ email: '', password: '' }}

            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Email is Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form className="login">
                    <h2>Contact Us</h2>

                    <Field type="email" name="email" placeholder="Enter your email" />
                    <ErrorMessage name="email" component="div" />
                    <Field type="password" name="password" placeholder="Enter your password" />
                    <ErrorMessage name="password" component="div" />
                    <Field type="number" name="password" placeholder="Enter your mobile number" />
                    <ErrorMessage name="number" component="div" />
                    <button className="button" type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    </div>
);

export default Contact;