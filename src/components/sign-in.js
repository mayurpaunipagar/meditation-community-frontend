import logo from './../images/ashok-chakra.png';
import './../App.css';
import React from 'react';
function SignIn() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Meditation Community</h1>
                <img src={logo} className="App-logo" alt="logo" />
                <p>Develop strength of mind</p>
            </header>
        </div>
    );
}
export default SignIn;