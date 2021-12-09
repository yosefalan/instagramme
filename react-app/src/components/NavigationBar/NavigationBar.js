import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from '../ProfileButton/ProfileButton';
import './NavigationBar.css';
import instagramme_logo from './images/instagramme_logo_black.png';
import like from './images/like.png';
import explore from './images/explore.png';
import add from './images/add.png';
import home from './images/home.png';


const NavigationBar = () => {
  const sessionUser = useSelector(state => state.session.user);

  return (
    <div className="mainNavContainer">
      <div className="centerNavContainer">
        <div className="homeLogo">
          <NavLink exact to="/"><img className="navLogo" src={instagramme_logo}></img></NavLink>
        </div>
        <div className="searchBarContainer"></div>
        <div className="navIcons">
          <img className="navLogo" className="navIcon" src={home}></img>
          <img className="navLogo" className="navIcon" src={add}></img>
          <img className="navLogo" className="navIcon" src={explore}></img>
          <img className="navLogo" className="navIcon" src={like}></img>
          <div className="sessionLinks">
            <ProfileButton user={sessionUser} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
