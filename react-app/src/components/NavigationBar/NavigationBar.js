import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "../ProfileButton/ProfileButton";
import UploadModal from "../UploadModal/index";
import "./NavigationBar.css";
import instagramme_logo from "./images/instagramme_logo_black.png";
// import like from "./images/like.png";
// import explore from "./images/explore.png";
import home from "./images/home.png";

const NavigationBar = () => {
  const sessionUser = useSelector((state) => state.session.user);

  if(sessionUser){
    return (
      <div className="mainNavContainer">
        <div className="centerNavContainer">
          <div className="homeLogo">
            <NavLink exact to="/">
              <img className="navLogo" src={instagramme_logo} alt=""></img>
            </NavLink>
          </div>
          <div className="searchBarContainer"></div>
          <div className="navIcons">
            <NavLink exact to="/">
              <img className="navLogo" className="navIcon" src={home} alt=""></img>
            </NavLink>
            <UploadModal />
            {/* <img className="navLogo" className="navIcon" src={explore}></img> */}
            {/* <img className="navLogo" className="navIcon" src={like}></img> */}
            <div className="sessionLinks">
              <ProfileButton user={sessionUser} />
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default NavigationBar;
