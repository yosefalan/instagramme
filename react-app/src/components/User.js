import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserPosts } from "../store/posts";
import { addFollowed } from "../store/following";

import "./User.css";
import Footer from "./Footer/Footer";

import DisplayPostModal from "./DisplayPostModal/index";
import DisplayFollowersModal from "./DisplayFollowersModal";
import DisplayFollowingModal from "./DisplayFollowingModal";

function User() {
  const [user, setUser] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [postId, setPostId] = useState("");
  const [allowFollow, setAllowFollow] = useState(false);
  const { userId } = useParams();
  const dispatch = useDispatch();
  const suser = useSelector((state) => Object.values(state.session.user));
  const posts = useSelector((state) => Object.values(state.posts));
  const [showFollowersModal, setShowFollowersModal] = useState(false);
  const [showFollowingModal, setShowFollowingModal] = useState(false);

  // let sessionUser = {};
  // sessionUser["id"] = 0;

  const checkProfile = () => {
    if (suser[3] !== +userId && !suser[2].includes(+userId)) {
      setAllowFollow(true);
    }
  };

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  useEffect(() => {
    checkProfile();
    dispatch(getUserPosts(userId));
  }, [dispatch, userId]);

  const handleClick = (postId) => {
    setPostId(postId);
    setShowModal(true);
  };

  const handleFollow = async (sessionUserId, followedId) => {
    dispatch(addFollowed(sessionUserId, followedId));
    window.location.reload(false);
  };

  const handleFollowingClick = (userId) => {
    setShowFollowingModal(true);
  };

  const handleFollowersClick = (userId) => {
    setShowFollowersModal(true);
  };

  if (!user) {
    return null;
  }
  return (
    <>
      <main className="profile-main-container">
        <div className="profile-content-container">
          <header className="profile-header">
            <div className="profile-image-container">
              <div className="profile-image-wrapper">
                <div className="profile-image-button-wrapper">
                  <button className="profile-button">
                    {user.profile_image && (
                      <img
                        id="profile-image"
                        src={`${user.profile_image}`}
                        alt=""
                      ></img>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <section className="profile-section">
              {showFollowingModal && (
                <DisplayFollowingModal
                  userId={userId}
                  setShowFollowingModal={setShowFollowingModal}
                />
              )}
              {showFollowersModal && (
                <DisplayFollowersModal
                  userId={userId}
                  setShowFollowersModal={setShowFollowersModal}
                />
              )}
              {showModal && (
                <DisplayPostModal postId={postId} setShowModal={setShowModal} />
              )}
              <div className="profile-name-wrapper">
                <h2 className="profile-name"> {user.username}</h2>
                {allowFollow && (
                  <button id="profile-page-follow-button"
                    onClick={() => {
                      handleFollow(suser[3], userId);
                    }}
                  >
                    Follow
                  </button>
                )}
                {/* <div>

                  <div>
                    {user.id === sessionUser.id && <a href="">Edit Profile</a>}
                  </div>
                </div> */}
                <div className="cog-container">
                  <div>
                    <div></div>
                  </div>
                </div>
              </div>
              <ul className="profile-data-list">
                <li className="profile-posts-data">
                  <div className="profile-posts-data-text" id="posts-data-text">
                    <span className="profile-data-bold">{posts?.length}</span>{" "}
                    {posts.length === 1 ? "post" : "posts"}
                  </div>
                </li>
                <li className="profile-posts-data">
                  <div
                    className="profile-posts-data-text"
                    onClick={() => {
                      handleFollowersClick(userId);
                    }}
                  >
                    <span className="profile-data-bold">
                      {user.followers?.length}
                    </span>{" "}
                    {user.followers === 1 ? "follower" : "followers"}
                  </div>
                </li>
                <li className="profile-posts-data">
                  <div
                    className="profile-posts-data-text"
                    onClick={() => {
                      handleFollowingClick(userId);
                    }}
                  >
                    <span className="profile-data-bold">
                      {user.following?.length}
                    </span>{" "}
                    following
                  </div>
                </li>
              </ul>
              <div>
                {/* <h1 className="profile-first-last-name">Firstname Lastname</h1> */}
                <br></br>
              </div>
            </section>
          </header>
          <div className="profile-posts-table-list">
            <div className="profile-posts-table-item" href="">
              <span className="profile-posts-table-span">Posts</span>
            </div>
          </div>
          <div className="profile-gallery-container">
            {posts?.map((post) => {
              return (
                <div className="profile-postpic-container" key={post.id}>
                  <div>
                    <div className="profile-postpic-wrapper">
                      <img
                        className="profile-postpic-img"
                        src={post.photos}
                        alt=""
                        onClick={() => handleClick(post.id)}
                      ></img>
                    </div>
                    <div className="postpic-wrapper-peer"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>

    // <ul>
    //   <li>
    //     <strong>User Id</strong> {userId}
    //   </li>
    //   <li>
    //     <strong>Username</strong> {user.username}
    //   </li>
    //   <li>
    //     <strong>Email</strong> {user.email}
    //   </li>
    // </ul>
  );
}
export default User;
