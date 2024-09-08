import React, { Component, useEffect } from 'react';
import { CreditPopup } from './Popups'
import './about.css'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addUser, removeUser } from '../../Features/Register/RegisterSlice';
const description = 'Featuring delicious handmade pastries and freshly ground coffee';

const About = ({ route, navigation }) => {
    // const params = useParams();
    // const { itemId, otherParam } = route.params;
    // useEffect(() => {

    //     console.log(itemId, 'ljaskdnskd')
    // });

    const dispatch = useDispatch()
    return (
        <div id="about">
            <div className="d-flex flex-column bd-highlight  mb-3 about-bg">
                <div className="flex-fill align-self-center">
                    <div className="container text-center">
                        <h1>Welcome to Shreeja Cakes Creation</h1>
                        {/* <h1 className="display-4 description">{description}</h1> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
