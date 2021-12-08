import LoginForm from '../auth/LoginForm';
import { NavLink } from 'react-router-dom';
import '../LandingPage/LandingPage.css'

const LandingPage = () => {
  return (
    <div className="mainContainer">
      {/* <h1>Landing Page</h1> */}
      <div className="centerContainer">
        <div className="landingImgContainer">
          <img src="/images/phones.png"></img>
        </div>
        <div className="mainFormContainer">
          <div className="upperFormContainer">
            <img
            className="formLogo"
            src="/images/instagramme_logo_black.png"></img>
            <LoginForm/>
          </div>
          <div className="lowerFormContainer">
          Don't have an account?
          <NavLink exact to="/signup">Sign up</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
