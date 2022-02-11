import React, {useEffect} from 'react';
import SignUpForm from "../auth/SignUpForm";
import { NavLink, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import instagramme_logo from "./instagramme_logo_black.png";
import './SignupPage.css'

const SignupPage = () => {
  const user = useSelector(state => state.session.user);

  useEffect(() => {
    console.log(user);
  }, [user]);

  if (user) {
    // console.log("hello from redirect!")
    return <Redirect to="/" />;
  }
  
  return (
    <div>
      {/* <h1>Signup Page</h1> */}

      <div className="fullContainer">
        <div className="mainContainer">
          {/* <h1>Landing Page</h1> */}
          <div className="centerContainer">
            <div className="mainFormContainer">
              <div className="upperFormContainer">
                <img className="formLogo" src={instagramme_logo} alt=""></img>

                <SignUpForm />
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
    </div>
  )
};

export default SignupPage;
