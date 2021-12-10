import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserPosts } from "../store/posts";
import "./User.css";
import Footer from "./Footer/Footer";
import DisplayPostModal from "./DisplayPostModal/index";

function User() {
  const [user, setUser] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [postId, setPostId] = useState("");
  const { userId } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector((state) => Object.values(state.posts));
  const [showFollow, setShowFollow] = useState(false);

  let sessionUser = {};
  sessionUser["id"] = 0;

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
    dispatch(getUserPosts(userId));
  }, [dispatch, userId]);

  const handleClick = (postId) => {
    setPostId(postId);
    setShowModal(true);
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
              {showModal && (
                <DisplayPostModal postId={postId} setShowModal={setShowModal} />
              )}
              <div className="profile-name-wrapper">
                <h2 className="profile-name"> {user.username}</h2>
                <div>
                  <div>
                    {user.id === sessionUser.id && <a href="">Edit Profile</a>}
                  </div>
                </div>
                <div className="cog-container">
                  <div>
                    <div></div>
                  </div>
                </div>
              </div>
              <ul className="profile-data-list">
                <li className="profile-posts-data">
                  <span>
                    <span className="profile-data-bold">
                      {posts?.length || 0}
                    </span>{" "}
                    {posts.length == 1 ? "post" : "posts"}
                  </span>
                </li>
                <li className="profile-posts-data">
                  <a className="profile-posts-data-text" href="">
                    <span className="profile-data-bold">
                      {user.followers?.length || 0}
                    </span>{" "}
                    {user.followers == 1 ? "follower" : "followers"}
                  </a>
                </li>
                <li className="profile-posts-data">
                  <a className="profile-posts-data-text" href="">
                    <span className="profile-data-bold">
                      {user.following?.length || 0}
                    </span>{" "}
                    following
                  </a>
                </li>
              </ul>
              <div>
                <h1 className="profile-first-last-name">Firstname Lastname</h1>
                <br></br>
              </div>
            </section>
          </header>
          <div className="profile-posts-table-list">
            <a className="profile-posts-table-item" href="">
              <span className="profile-posts-table-span">Posts</span>
            </a>
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
