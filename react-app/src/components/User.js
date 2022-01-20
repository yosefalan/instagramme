import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserPosts } from "../store/posts";
// import { addFollowed } from "../store/following";
import { getSuserFollows, addSuserFollowed } from '../store/follows';

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
  const suser = useSelector((state) => state.session.user);
  const follows = useSelector((state) => state.follows);
  // const suserObj = useSelector((state) => state.session.user);
  const posts = useSelector((state) => Object.values(state.posts));
  // const follows = useSelector((state) => state.follows)
  const [showFollowersModal, setShowFollowersModal] = useState(false);
  const [showFollowingModal, setShowFollowingModal] = useState(false);
  const [followsLoaded, setFollowsLoaded] = useState(false);

  // let sessionUser = {};
  // sessionUser["id"] = 0;

  const checkProfile = () => {
    // console.log(suserObj);
    // console.log(suser);
    // console.log("suser[3]:", suser[3]);
    // console.log("suser[2]:", suser[2]);
    // console.log("userId:", userId);
    // console.log("+userId:", +userId);
    // console.log("suser.id:", suser.id);
    // console.log("+(suser.id):", +(suser.id));
    // console.log("suser.following:", suser.following);
    // console.log("follows.following:", follows.following);
    // console.log("follows.following[userId]:", follows.following)
    // console.log("followsLoaded:", followsLoaded)
    // console.log("user.followers", user.followers)
    // if session user id is not equal to the userId of the user whose profile the session user is looking at,
    // and if that user's id isn't on the session user's following list,
    if (!followsLoaded) {
    // if (!followsLoaded && suser.id !== +userId && !suser.following.includes(+userId)) {
      setAllowFollow(false);
      // && !follows.following[String(userId)]
    } else if (followsLoaded && user.followers.indexOf(suser["id"]) === -1) {
      setAllowFollow(true);
    } else if (followsLoaded && suser.id !== +userId && !follows.following[userId]) {
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
      // console.log("SETPROFILE", user);
    })();
  }, [userId]);

useEffect(() => {
  setAllowFollow(false);
  checkProfile();
}, [user, followsLoaded])

  useEffect(() => {
    (async () => {
      await dispatch(getUserPosts(userId));
      await dispatch(getSuserFollows());
      setFollowsLoaded(true);
    })()
  }, [dispatch, userId]);

  // useEffect(() => {
  //   const sFollowers = Object.values(follows.followers).map(follower => follower.id);
  //   const sFollowing = Object.values(follows.following).map(followee => followee.id);
  // }, [follows])

  const handleClick = (postId) => {
    setPostId(postId);
    setShowModal(true);
  };

  const handleFollow = async (sessionUserId, followedId) => {
    await dispatch(addSuserFollowed(followedId));
    // dispatch(addFollowed(sessionUserId, followedId));
    // window.location.reload(false);
    setAllowFollow(false);
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
              <div className="profile-name-wrapper">
                <h2 className="profile-name">{user.username}</h2>
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
                {showFollowingModal && (
                  <DisplayFollowingModal
                    userId={userId}
                    setShowFollowingModal={setShowFollowingModal}
                    setUser={setUser}
                  />
                )}
                {showFollowersModal && (
                  <DisplayFollowersModal
                    userId={userId}
                    setShowFollowersModal={setShowFollowersModal}
                    setUser={setUser}
                  />
                )}
                {showModal &&
                  <DisplayPostModal postId={postId} setShowModal={setShowModal} />
                }
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
