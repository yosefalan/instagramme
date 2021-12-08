import LoginForm from "../auth/LoginForm";
import Footer from "../Footer";
import { NavLink } from "react-router-dom";
import "../LandingPage/LandingPage.css";
import phones from "./phones.png";
import instagramme_logo from "./instagramme_logo_black.png";
import profile_image from "./profileImage.jpg";
import snow_pic from './snow.jpeg'

const LandingPage = () => {
  return (
    <div className="fullContainer">
      <div className="mainContainer">
        {/* <h1>Landing Page</h1> */}
        <div className="centerContainer">
          <div className="landingImgContainer">

            <img className='phoneImg' src={phones}></img>
            <img className='snowImg' src={snow_pic}></img>
          </div>
          <div className="mainFormContainer">
            <div className="upperFormContainer">
              <img className="formLogo" src={instagramme_logo}></img>

              <LoginForm />
            </div>
            <div className="lowerFormContainer">
              Don't have an account?
              <NavLink exact to="/signup">
                Sign up
              </NavLink>
            </div>
          </div>
        </div>
      </div>
        <div className="footer">
          <Footer />
        </div>
    </div>
  );
};

export default LandingPage;
