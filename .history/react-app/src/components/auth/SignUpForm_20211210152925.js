import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp, demoLogin } from "../../store/session";
import "./SignUpForm.css";

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const handleDemoLogin= (e) => {
    e.preventDefault();
    return dispatch(demoLogin())
  }

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={onSignUp}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className="signUpDiv">
        <div className='input_div'>
          <input
            type="text"
            name="username"
            placeholder='user name'
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div className='input_div'>
          <input
            type="text"
            name="email"
            placeholder='email'
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div className='input_div'>

          <input
            type="password"
            name="password"
            placeholder='password'
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div className='input_div'>

          <input
            type="password"
            name="repeat_password"
            placeholder='repeat password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <button className='signup_button' type="submit">Sign Up</button>
        <button onClick={handleDemoLogin} className="signup_button">Demo Login</button>
      </div>
    </form>
  );
};

export default SignUpForm;
