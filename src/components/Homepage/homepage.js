import { React, useState } from "react";
import "./homepage.css"
import Carousel from 'react-bootstrap/Carousel';

import "bootstrap/dist/css/bootstrap.min.css";
import image from "../../images/little-delicious-cake-with-cream-along-with-berries-bright-desk-cake-biscuit-berry-sweet-sugar-photo.jpg"
import image1 from "../../images/frame-food-ingredients-baking-gently-pink-pastel-table-cooking-flat-lay-with-copy-space-top-view-baking-concept-flat-lay.jpg"
import image2 from "../../images/top-view-assortment-beautiful-tableware-with-copy-space.jpg"
import fbIcon from '../../images/icons8-facebook-48.png'
import InstaIcon from '../../images/icons8-instagram-48.png'


import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import Button from '@mui/material/Button';
import { Navigate, useNavigate } from "react-router-dom";
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import cakelogo from "../../images/Cake_logo.png"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPhone, faMessage } from '@fortawesome/free-solid-svg-icons'

const Homepage = () => {
    const navigate = useNavigate();

    const handlechange = () => {
        console.log('onchange')
    }
    // const [src, setSrc] = useState(null);
    // const [crop, setCrop] = useState({ aspect: 16 / 9 });
    // const [image, setImage] = useState(null);
    // const [output, setOutput] = useState(null);
    const [click, setClick] = useState(false)
    return (
        <>

            {/* first Navbar */}
            <Navbar collapseOnSelect expand="lg"
                style={{ backgroundColor: '#ffcccc' }}>
                <Container>
                    <Navbar.Brand href="#home">
                        {/* <img
                            // src={gfglogo}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        /> */}
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link style={{ pointerEvents: 'none' }}>
                                Follow us
                            </Nav.Link>
                            <Nav.Link href="#DataStructures">
                                <img
                                    style={{
                                        "height": "22px",
                                        "width": "24px"
                                    }}
                                    src={fbIcon}
                                />

                            </Nav.Link>
                            <Nav.Link
                                href="#CompetitiveProgramming">
                                <img
                                    style={{
                                        "height": "22px",
                                        "width": "24px"
                                    }}
                                    href=""
                                    src={InstaIcon}
                                />                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#contactus">
                                <FontAwesomeIcon icon={faPhone} />+91 9820824073
                            </Nav.Link>
                            <Nav.Link href="#contactus">
                                <FontAwesomeIcon icon={faMessage} /> shreejacreation_20
                            </Nav.Link>
                            {/* <Nav.Link eventKey={2}
                                href="#community">
                                <FontAwesomeIcon icon={faMessage}>shreejacreation_20</FontAwesomeIcon>
                            </Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* Second Navbar */}
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand >
                        <img
                            onClick={() =>
                                navigate("/MainScreen")
                            }
                            src={cakelogo}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />



                    </Navbar.Brand>
                    <Nav className="justify-content-end" activeKey="/About">
                        {/* <Nav className="me-auto"> */}
                        <Nav.Link onClick={() => navigate("/About")}>About</Nav.Link>
                        <Nav.Link onClick={() => navigate("/Contact")}>Contact</Nav.Link>
                        <Nav.Link onClick={() => navigate("/Register")}>Register</Nav.Link>
                        <Nav.Link onClick={() => navigate("/Login")}>Login</Nav.Link>
                        <Button style={{ backgroundColor: 'white' }} variant="outline-success">Order Online</Button>{' '}
                    </Nav>



                </Container>
            </Navbar>

        </>
    )

}


export default Homepage;