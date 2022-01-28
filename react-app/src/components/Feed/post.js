import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./post.css";

// import DisplayPostModal from "../User";
import like_empty from "./images/likes.png";

import liked from "./images/likes_filled_red.png";
import comment from "./images/comment.png";
import { addLike, deleteLike } from "../../store/likes";

const Post = ({
  id,
  user_id,
  description,
  username,
  likes,
  comments,
  photos,
  profile_image,
  showPost,
  passId,
}) => {
  // const [showModal, setShowModal] = useState(false);
  // const [postId, setPostId] = useState(id);
  const dispatch = useDispatch();
  const handleClick = () => {
    showPost();
    passId();
  };
  let post_likes = useSelector((state) => state.posts[id].likes);

  const sessionUser = useSelector((state) => state.session.user);
  let user_like = post_likes.filter((like) => like[0] === sessionUser.id);

  const [Liked, SetLiked] = useState(user_like.length > 0 ? true : false);

  const like = (id, user_id) => {
    dispatch(addLike(id, sessionUser.id));
    SetLiked(true);
  };
  const unlike = (id) => {
    dispatch(deleteLike(id, sessionUser.id, user_like.id));
    SetLiked(false);
  };

  return (
    <div className="post-box">
      {/* {showModal && (
        <DisplayPostModal postId={postId} setShowModal={setShowModal} />
      )} */}
      <div className="user">
        <img className="profile-image-post" src={profile_image} alt="" />
        <NavLink className="username_link" to={`/users/${user_id}`}>
          {username}
        </NavLink>
      </div>
      <div className="photo-holder">
        <img className="photo" src={photos} alt="" onClick={handleClick} />
      </div>
      <div className="description">{description}</div>
      <div className="post-icons">
        {Liked ? (
          <img
            src={liked}
            alt=""
            className="like-icon"
            onClick={() => unlike(id)}
          ></img>
        ) : (
          <img
            src={like_empty}
            alt=""
            className="like-icon"
            onClick={() => like(id, user_id)}
          ></img>
        )}
        {/* <img src={liked} className="like-icon"></img> */}
        <img
          src={comment}
          alt=""
          className="comment-icon"
          onClick={handleClick}
        ></img>
      </div>
      <div className="likes">{post_likes.length} likes</div>
      <div className="comments">{comments} comments</div>
    </div>
  );
};

export default Post;
