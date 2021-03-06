import { useHistory } from "react-router";
import logo from "../images/ashok-chakra.png";
import { Button } from "reactstrap";
import NavigationBar from "./navigation-bar";

function LoginSelector() {
  const history = useHistory();
  const routeToSignIn = () => {
    history.push("/sign-in");
  };
  const routeToSignUp = () => {
    history.push("/sign-up");
  };
  return (
    <>
      <NavigationBar />
      <div className="App">
        <header className="App-header">
          <h1>Meditation Community</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>A platform to connect with meditators around the world.</p>
          <div className="login">
            <Button className="btn" color="success" onClick={routeToSignIn}>
              Sign In
            </Button>

            <Button className="btn" color="success" onClick={routeToSignUp}>
              Sign Up
            </Button>
          </div>
        </header>
      </div>
    </>
  );
}

export default LoginSelector;
