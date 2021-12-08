import SignUpForm from '../auth/SignUpForm';
import { NavLink } from 'react-router-dom';

const SignupPage = () => {
  return (
    <>
      <h1>Signup Page</h1>
      <SignUpForm/>
      <div>
      Have an account?
      <NavLink exact to="/login">Log in</NavLink>
      </div>
    </>
  );
}

export default SignupPage;
