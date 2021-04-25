
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
    <NavigationBar routeToLoginSelector={routeToLoginSelector}/>
      <ImageSlider />
      {/* <div className="home">I am Advertisement</div> */}
    </div>
    </>
  );
}

export default Advertise;
