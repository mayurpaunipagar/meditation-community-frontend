import logo from "./../images/ashok-chakra.png";
import "./../App.css";
import React, { useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import Spinner from "react-bootstrap/Spinner";
import { useHistory } from "react-router";
import NavigationBar from "./navigation-bar";
import { BACKEND_URL } from "../config";

function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitBtn, setSubmitBtn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error,setError]=useState("");
  const history = useHistory();

  const routeToHomePage = () => {
    history.push("/home");
  };

  const submitUserData = (event) => {
     console.log("I am working mayur")
    setLoading(true);
    event.preventDefault();
    const userObj = {
      fullName,
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
      BACKEND_URL+"/sign-up",
      requestOptions
    )
      .then((r) => {
        return r.json();
      })
      .then((r) => {
        console.log(r);
        if (r.status ) {
          // Route to home page
          console.log("I am in home page");
          setTimeout(() => {
            setLoading(false);
            routeToHomePage();
          }, 3000);
        }else if(r.status=== "failed"){
          setTimeout(() => {
            setError(r.error);
            setLoading(false);
          }, 3000);
          
        }
      })
      .catch((e) => {
        console.error(e);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      });
  };

  const checkAllData = () => {
    if (
      fullName.trim() !== "" &&
      email.trim() !== "" &&
      isEmail(email) &&
      password.trim() !== ""
    ) {
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
      {loading ? (
          <>
          <div className="loadingStyle">
          <Spinner animation="grow" />
          </div>
          </>
      ) : (
        <>
          <NavigationBar />
          <div className="App">
            <header className="App-header">
              <h1>Meditation Community</h1>
              <img src={logo} className="App-logo" alt="logo" />
              <p>First step to calm your mind</p>
            </header>
            <div className="login-form">
              {/* <div>{`Error: ${error}`}</div> */}
              <Form>
                <FormGroup>
                  <Input
                    type="text"
                    name="full-name"
                    placeholder="Full Name"
                    onKeyUp={checkAllData}
                    onChange={(event) => {
                      setFullName(event.target.value);
                      checkAllData();
                    }}
                    value={fullName}
                  ></Input>
                </FormGroup>
                <FormGroup>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Email"
                    onKeyUp={checkAllData}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      checkAllData();
                    }}
                    value={email}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="password"
                    onKeyUp={checkAllData}
                    onChange={(event) => {
                      setPassword(event.target.value);
                      checkAllData();
                    }}
                    value={password}
                  />
                </FormGroup>
                <Button
                  color="success"
                  disabled={!submitBtn}
                  onClick={submitBtn ? submitUserData : null}
                >
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default SignUp;
