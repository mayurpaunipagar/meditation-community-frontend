import { Button } from "bootstrap";
import { useHistory } from "react-router";
import "./App.css";
function Advertise() {
  const history = useHistory();
  const routeToLoginSelector = () => {
    history.push("/login-selector");
  };
  return (
    <>
      <div className="home">I am Advertisement</div>
      <Button className="btn" onClick={routeToLoginSelector}>
        Get Started
      </Button>
    </>
  );
}

export default Advertise;
