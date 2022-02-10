import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "../ProfileButton/ProfileButton";
import UploadModal from "../UploadModal/index";
import "./NavigationBar.css";
// import instagramme_logo from "./images/instagramme_logo_black.png";
import instagramme_logo from "./images/instagramme_logo_edit.png";
// import like from "./images/like.png";
// import explore from "./images/explore.png";
import home from "./images/home.png";

const NavigationBar = () => {
  const sessionUser = useSelector((state) => state.session.user);

  if(sessionUser){
    return (
      <div className="mainNavContainer">
        <div className="nav-spacer"></div>
        <div className="inner-nav-container">
          <div className="inner-nav-container-2">
            <div className="centerNavContainer">
              <div className="homeLogo-container">
                <NavLink exact to="/" className="home-link">
                  <div className="home-logo-inner-container">
                    <div className="home-logo-wrapper">
                      <img className="navLogo" src={instagramme_logo} alt="Instagramme"></img>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="searchBarContainer"></div>
              <div className="navIcons">
                <NavLink className="home-icon-link" exact to="/">
                  <img className="navIcon" src={home} alt=""></img>
                </NavLink>
                <UploadModal />
                {/* <img className="navLogo" className="navIcon" src={explore}></img> */}
                {/* <img className="navLogo" className="navIcon" src={like}></img> */}
                {/* <div>
                  <div className="navIcon"></div>
                </div>
                <div>
                  <div className="navIcon"></div>
                </div>
                <div>
                  <div className="navIcon"></div>
                </div> */}
                <div className="sessionLinks">
                  <ProfileButton user={sessionUser} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default NavigationBar;
