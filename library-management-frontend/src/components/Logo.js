import React from 'react';
import logo from '../assets/images/logo.png'
import '../assets/css/logo.css'

function component1(props) {
    return (
        <div>
            <div className='logo'>
                <div className='img'><img src={logo} className='logo' alt="logo" /></div>
                <div className='library'>
                    <h2>Library</h2>
                    <h1>Management</h1>
                </div>
                
            </div><p>Welcome! Let’s get started</p>
        </div>

    );
}

export default component1;