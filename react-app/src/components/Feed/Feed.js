import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPosts,
  createPost,
  editPost,
  deletePost,
} from "../../store/posts";
import Post from "./post";
import DisplayPostModal from "../DisplayPostModal/index";
import FollowingFeed from "../FollowingFeed/FollowingFeed";
import "./Feed.css";

const Feed = () => {
  const sessionUser = useSelector((state) => state.session.user);
  console.log("user info", sessionUser);
  const dispatch = useDispatch();
  const posts = useSelector((state) => Object.values(state.posts));
  const [showModal, setShowModal] = useState(false);
  const [postId, setPostId] = useState("");

  // const photos = useSelector((state) => Object.values(state.photos));
  const handleClick = (id) => {
    setPostId(id);
    setShowModal(true);
  };
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="feed-container">
      {showModal && (
        <DisplayPostModal postId={postId} setShowModal={setShowModal} />
        )}
      <div className="feed-center-container">
        <FollowingFeed />
        {posts
        ?.reverse()
        .map(
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
            <div onClick={() => handleClick(id)}>
              <Post
                id={id}
                user_id={user_id}
                description={description}
                username={username}
                likes={likes}
                comments={comments}
                photos={photos}
                profile_image={profile_image}
                />
            </div>
            )
            )}
        </div>
    </div>
  );
};

export default Feed;
