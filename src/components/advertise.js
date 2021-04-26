
import { useHistory } from "react-router";
import NavigationBar from "./navigation-bar";
import ImageSlider from "./image-slider";
import Introduction from "./introduction";

function Advertise() {
  const history = useHistory();
  const routeToLoginSelector = () => {
    history.push("/login-selector");
  };
  return (
    <>
    <div className="advertise">
    <NavigationBar routeToLoginSelector={routeToLoginSelector} isGetStarted/>
      <ImageSlider />
      <Introduction/>
      {/* <div className="home">I am Advertisement</div> */}
    </div>
    </>
  );
}

export default Advertise;
