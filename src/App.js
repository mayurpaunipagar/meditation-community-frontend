import logo from './images/ashok-chakra.png';
import './App.css';
import React from 'react';
import { Button } from 'reactstrap';
import {useHitory} from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from './components/sign-in';
import SignUp from './components/sign-up';
import Home from './components/home';
function App() {
  const history=useHitory();

  const setLoggedIn=(booleanValue)=>{
    if(booleanValue){
      history.push("/home");
    }
  }
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/sign-in">
              <SignIn setLoggedIn={setLoggedIn}/>
            </Route>
            <Route path="/sign-up">
              <SignUp setLoggedIn={setLoggedIn}/>
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/">
              <header className="App-header">
                <h1>Meditation Community</h1>
                <img src={logo} className="App-logo" alt="logo" />
                <p>A platform to connect with meditators around the world.</p>
                <div className="login">
                  <Link to="/sign-in"><Button className="btn" color="success">Sign In</Button></Link>
                  <Link to="/sign-up"><Button className="btn" color="success">Sign Up</Button></Link>
                </div>
              </header>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
