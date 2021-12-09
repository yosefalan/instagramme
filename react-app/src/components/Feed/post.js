import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./post.css";

const Post = ({
  id,
  user_id,
  description,
  username,
  likes,
  comments,
  photos,
}) => {
  console.log("url", photos);
  return (
    <div className="post-box">
      <div className="username_link">
        <NavLink className="username_link" to={`/api/users/${user_id}/profile`}>
          {username}
        </NavLink>
      </div>
      <div className="photo">
        <img src={photos} alt="post-photo" />
      </div>
      <div className="description">{description}</div>
      <div className="likes">{likes}</div>
      <div className="comments">{comments}</div>
    </div>
  );
};

export default Post;
