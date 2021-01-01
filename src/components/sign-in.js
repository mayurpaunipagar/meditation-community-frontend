import logo from './../images/ashok-chakra.png';
import './../App.css';
import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
function SignIn() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Meditation Community</h1>
                <img src={logo} className="App-logo" alt="logo" />
                <p>Develop strength of mind</p>
            </header>
            <div className="login-form">
                <Form>
                    <FormGroup>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                        <Input type="password" name="password" id="examplePassword" placeholder="password" />
                    </FormGroup>
                    <Button color="success" className="SubmitBtn">Submit</Button>
                </Form>
            </div>

        </div>
    );
}
export default SignIn;