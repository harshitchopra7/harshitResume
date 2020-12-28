import React from 'react';
import './Name.css';
import harshit from './harshit.jpeg';

function Name () {
    return (
        <div className="name">
            <div className="image_container">
                <img src={harshit} alt="" />
            </div>
            <div className="name_container">
                <h1>Harshit Chopra</h1>
            </div>    
        </div>
    );
}
export default Name;