import { Button } from "reactstrap";
import { useHistory } from "react-router";
import NavigationBar from "./navigation-bar";
import ImageSlider from "./image-slider";

function Advertise() {
  const history = useHistory();
  const routeToLoginSelector = () => {
    history.push("/login-selector");
  };
  return (
    <>
    <div className="advertise">
    <NavigationBar />
      <ImageSlider />
      <div className="home">I am Advertisement</div>
      <Button className="btn" onClick={routeToLoginSelector}>
        Get Started
      </Button>
    </div>
    </>
  );
}

export default Advertise;
