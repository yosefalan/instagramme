import LoginForm from "../auth/LoginForm";
import { NavLink } from "react-router-dom";
import Footer from "../Footer";
import instagramme_logo from "./instagramme_logo_black.png";
import app_store_logos from './app_store_logos.png'


const LoginPage = () => {
  return (
    <>
      {/* <h1>Signup Page</h1> */}

      <div className="fullContainer">
        <div className="mainContainer">
          {/* <h1>Landing Page</h1> */}
          <div className="centerContainer">
            <div className="mainFormContainer">
              <div className="upperFormContainer">
                <img className="formLogo" src={instagramme_logo}></img>

                <LoginForm />
              </div>
              <div className="lowerFormContainer">
                Already have an account?
                <NavLink className='loginLink' exact to="/login">
                  Login
                </NavLink>
              </div>
              
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
