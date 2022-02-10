import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getPosts } from "../../store/posts";
import Post from "./post";
import DisplayPostModal from "../DisplayPostModal/index";
import FollowingFeed from "../FollowingFeed/FollowingFeed";
import "./Feed.css";

const Feed = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const posts = useSelector((state) => Object.values(state.posts));
  const [showModal, setShowModal] = useState(false);
  const [postId, setPostId] = useState("");
  // const [style, setStyle] = useState({});


  const sorted_posts = posts.sort((a, b) => (a.createdAt > b.createdAt) ? 1 : -1)

  // const photos = useSelector((state) => Object.values(state.photos));
  const handleClick = (id) => {
    setPostId(id);
    setShowModal(true);
  };
  
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  // useEffect(() => {
  //   setStyle({
  //     left: `${window.innerWidth}px - 28px`
  //   });
  // }, [window.innerWidth])

  return (
    <div className="feed-container">
      {showModal && 
        <DisplayPostModal postId={postId} setShowModal={setShowModal} />
      }
      <div className="feed-center-container">
        <div className="feed-column">
          <FollowingFeed />
          <div className="posts-container">
            {sorted_posts
            ?.map(
              ({
                id,
                user_id,
                description,
                username,
                likes,
                comments,
                photos,
                profile_image,
              }) => (
                // <div onClick={() => handleClick(id)}>

                  <Post
                    key={id}
                    id={id}
                    user_id={user_id}
                    description={description}
                    username={username}
                    likes={likes}
                    comments={comments}
                    photos={photos}
                    profile_image={profile_image}
                    showPost={() => setShowModal(true)}
                    passId={() => setPostId(id)}
                    />
                // </div>
              )
            )}
          </div>
        </div>
        {/* <div id="column-spacer"></div> */}
        <div className="about-column">
          <div className="feed-profile-container">
              <div className="feed-profile-container-2">
                <div className="feed-profile-container-3">
                  <div className="feed-profile-pic-container">
                    <div className="feed-profile-pic-wrapper">
                      <Link className="feed-profile-pic-link" to={`users/${sessionUser.id}`}>
                        <img className="feed-profile-pic-img" src={sessionUser.profile_image} alt=""/>
                      </Link>
                    </div>
                  </div>
                  <div className="feed-username-text-container">
                  <Link className="feed-username-text-link" to={`users/${sessionUser.id}`}>
                    <span className="feed-username-text-span">
                      {sessionUser.username === "Demo" ? "DemoUser" : sessionUser.username}
                    </span>
                  </Link>
                  </div>
                </div>
              </div>
          </div>
          {/* <div>
              [Suggested follows]
          </div> */}
          <div className="feed-about-container">
            <div className="feed-about-heading">
              Developed by:
            </div>
            <div className="feed-about-body">
              <a className="developer-link" href="http://greg-nice.github.io/">
                <p className="developer-p-tag">
                  Greg Gomes
                </p>
              </a>
              <a className="developer-link" href="https://www.linkedin.com/in/jake-payne-aba009155/">
                <p className="developer-p-tag">
                  Jake Payne
                </p>
              </a>
              <a className="developer-link" href="https://www.linkedin.com/in/joseph-nackman/">
                <p className="developer-p-tag">
                  Joseph Nackman
                </p>
              </a>
              <a className="developer-link" href="https://www.linkedin.com/in/tony-hauck-92b6a21a4/">
                <p className="developer-p-tag">
                  Tony Hauck
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
