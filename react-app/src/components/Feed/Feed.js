import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPosts,
  getOnePost,
  createPost,
  editPost,
  deletePost,
} from "../../store/posts";

const Feed = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const posts = useSelector((state) => Object.values(state.posts));
  // const photos = useSelector((state) => Object.values(state.photos));
  console.log("user", sessionUser);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      {posts?.map(({ id, user_id, description }) => (
        <div>{description}</div>
      ))}
    </div>
  );
};

export default Feed;
