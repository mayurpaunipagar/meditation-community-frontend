import logo from "./../images/ashok-chakra.png";
import "./../App.css";
import React, { useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { useHistory } from "react-router-dom";
import NavigationBar from "./navigation-bar";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitBtn, setSubmitBtn] = useState(false);
  const history = useHistory();

  const routeToHomePage = () => {
    history.push("/home");
  };

  const submitUserData = (event) => {
    event.preventDefault();
    const userObj = {
      email,
      password,
    };
    const requestOptions = {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(userObj), // body data type must match "Content-Type" header
    };
    fetch(
      "https://meditation-community-backend.herokuapp.com/sign-in",
      requestOptions
    )
      .then((r) => {
        return r.json();
      })
      .then((r) => {
        console.log(r);
        if (r.status === "ok") {
          // Route to home page
          console.log("I am in home page");
          routeToHomePage();
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const checkAllData = () => {
    if (email.trim() !== "" && isEmail(email) && password.trim() !== "") {
      setSubmitBtn(true);
    } else {
      setSubmitBtn(false);
    }
  };
  const isEmail = (email) => {
    if (
      email.search(
        /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
      ) !== -1
    )
      return true;
    else return false;
  };

  return (
    <>
      <NavigationBar />
      <div className="App">
        <header className="App-header">
          <h1>Meditation Community</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>Develop strength of mind</p>
        </header>
        <div className="login-form">
          <Form>
            <FormGroup>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Email"
                value={email}
                onKeyUp={checkAllData}
                onChange={(event) => {
                  setEmail(event.target.value);
                  checkAllData();
                }}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password"
                value={password}
                onKeyUp={checkAllData}
                onChange={(event) => {
                  setPassword(event.target.value);
                  checkAllData();
                }}
              />
            </FormGroup>
            <Button
              color="success"
              
              onClick={submitUserData}
              disabled={!submitBtn}
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
export default SignIn;
