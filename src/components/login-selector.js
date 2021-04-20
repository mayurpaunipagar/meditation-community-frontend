import { useHistory } from "react-router";

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
      <header className="App-header">
        <h1>Meditation Community</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>A platform to connect with meditators around the world.</p>
        <div className="login">
          <Button className="btn" color="success" onClick={routeToSignIn}>
            Sign In
          </Button>

          <Button className="btn" color="success">
            Sign Up
          </Button>
        </div>
      </header>
    </>
  );
}

export default LoginSelector;
