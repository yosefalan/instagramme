import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./post.css";
import DisplayPostModal from "../User";
import like from './images/likes.png'
import liked from './images/likes_filled_red.png'
import comment from './images/comment.png'

const Post = ({
  id,
  user_id,
  description,
  username,
  likes,
  comments,
  photos,
  profile_image,
}) => {
  return (
    <div className="post-box">
      <div className="user">
        <img className="profile-image-post" src={profile_image} />
        <NavLink className="username_link" to={`/users/${user_id}`}>
          {username}
        </NavLink>
      </div>
      <div className="photo-holder">
        <img className="photo" src={photos} alt="post-photo" />
      </div>
      <div className="description">{description}</div>
      <div className="post-icons">
      <img src={like} className></img>
      <img src={comment}></img>
      </div>
      <div className="likes">{likes} likes</div>
      <div className="comments">{comments} comments</div>
    </div>
  );
};

export default Post;
