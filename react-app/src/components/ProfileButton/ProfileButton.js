import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "../ProfileButton/ProfileButton.css";
import profileImage from "./images/profile.jpg";

function ProfileButton({ user }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  // const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  // }, [dispatch]);

  const openMenu = () => {
    // if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;
    const closeMenu = () => {
      setShowMenu(false);
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = async () => {
    dispatch(sessionActions.logout()).then(history.push("/"));
  };

  return (
    <div className="buttonContainer">
      <div className="profileImageContainer" onClick={openMenu}>
        {user ? (
          user.profile_image ? (
            <img src={user.profile_image} className="profileImage" alt=""></img>
          ) : (
            <img src={profileImage} className="profileImage" alt=""></img>
          )
        ) : (
          <img src={profileImage} className="profileImage" alt=""></img>
        )}
      </div>
      {showMenu && (
        <div className="dropdownContent">
          <a href={`/users/${user.id}`} className="profileLink">
            Profile
          </a>
          <p className="profileLink" onClick={() => logout()}>
            Log Out
          </p>
        </div>
      )}
    </div>
  );
}

export default ProfileButton;
