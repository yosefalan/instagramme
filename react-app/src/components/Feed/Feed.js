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
    <div>
      {posts
        ?.reverse()
        .map(
          ({ id, user_id, description, username, likes, comments, photos }) => (
            <Post
              id={id}
              user_id={user_id}
              description={description}
              username={username}
              likes={likes}
              comments={comments}
              photos={photos}
            />
          )
        )}
    </div>
  );
};

export default Feed;
