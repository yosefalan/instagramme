import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from '../ProfileButton/ProfileButton';
import './NavigationBar.css';
import instagramme_logo from "./instagramme_logo_black.png";


const NavigationBar = () => {
  const sessionUser = useSelector(state => state.session.user);

  return (
    <div className="mainNavContainer">
      <div className="centerNavContainer">
        <div className="homeLogo">
          <NavLink exact to="/"><img className="navLogo" src={instagramme_logo}></img></NavLink>
        </div>
        <div className="sessionLinks">
          <ProfileButton user={sessionUser} />
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;


<i class="fa-solid fa-house"></i>
