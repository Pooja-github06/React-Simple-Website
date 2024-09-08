//import logo from './logo.svg';
import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import image from './images/Shreejalogo.png'
import './App.css';
import "aos/dist/aos.css";
import Popup from "../src/components/OrderPopup/Popup.js"
import { useMediaQuery } from 'react-responsive'
// import Register from './App/Components/Register.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Routes,
} from "react-router-dom";
// Importing loader
import img from './images/cake logo.jpeg'
import PacmanLoader from "react-spinners/PacmanLoader";
// import ClockLoader from "react-spinners/ClockLoader";
import Homepage from './components/Homepage/homepage.js';
import Login from './components/LoginPage/login'
import Register from './components/RegisterPage/register';
import Contact from './components/Contact/contact.js';
import About from './components/About/About.js';
import MainScreen from '../src/MainPage/MainScreen.js';
import Login1 from "./components/Testing/Login1.js";
import Carousal from "././MainPage/carusal.js"
import Footer from "../src/components/Footer"



const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  const isDesktopOrLaptop = useMediaQuery(
    { minDeviceWidth: 1224 },
    { deviceWidth: 1600 } // `device` prop
  )
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  const apicall = () => {
    // console.log('test')


    // axios.post('http://localhost:5000/test', {
    //   params: {
    //     Email: 'bar',
    //     Password: ''
    //   }
    // }.then((response) => {
    //   console.log(response);

    //   // setPost(response.data);
    // })
    // )
  }

  useEffect(() => {
    apicall()
    // Wait for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (

    <>

      <div className='App'>
        {/* <MediaQuery minWidth={1824}> */}
        {isDesktopOrLaptop && (
          <Router>
            <div>

              <Homepage handleOrderPopup={handleOrderPopup} />
              <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />

              <Routes>

                <Route path="/Login1" element={<Login1 />} />
                <Route path="/About" element={

                  // <About />}?
                  <MainScreen />
                }
                />

                <Route path="/Contact" element={

                  <Contact />}
                />

                <Route path="/Login" element={

                  <Login />}
                />
                <Route path="/Register" element={

                  <Register />}

                />
                <Route path="/MainScreen" element={

                  <MainScreen />} />
                <Route path='/Carousal' element={<Carousal />} />
                {/* <Route path="/Homepage" element={

                <Homepage /> */
                }
                {/* /> */}
              </Routes>
            </div>

          </Router>
        )}

        {/* </MediaQuery> */}
        {/* <Footer /> */}
      </div>

    </>
  );
}


const override = `
display: block;
margin: 0 auto;
border-color: red;

`;


export default App;
