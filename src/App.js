import logo from "./images/ashok-chakra.png";
import "./App.css";
import React from "react";
import { Button } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignIn from "./components/sign-in";
import SignUp from "./components/sign-up";
import Home from "./components/home";
import Advertise from "./components/advertise";
import LoginSelector from "./components/login-selector";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/login-selector">
              <LoginSelector />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/sign-in">
              <SignIn />
            </Route>
            <Route path="/sign-up">
              <SignUp />
            </Route>
            <Route path="/">
              <Advertise />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
