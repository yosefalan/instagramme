import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPosts,
  getOnePost,
  createPost,
  editPost,
  deletePost,
} from "../../store/posts";
import Post from "./post";
import "./Feed.css";

const Feed = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const posts = useSelector((state) => Object.values(state.posts));
  // const photos = useSelector((state) => Object.values(state.photos));
  console.log("posts", posts);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="feed-container">
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
          )
        )}
    </div>
  );
};

export default Feed;
