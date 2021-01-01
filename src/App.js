import logo from './images/ashok-chakra.png';
import './App.css';
import React from 'react';
import { Button } from 'reactstrap';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meditation Community</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          A platform to connect with all meditators around the world.
        </p>
        <div className="login">
            <Button className="btn">Sign In</Button>
            <Button className="btn">Sign Up</Button>
        </div>

      </header>

    </div>
  );
}

export default App;
