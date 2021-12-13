import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./post.css";
import DisplayPostModal from "../User";
import like_empty from './images/likes.png'
import liked from './images/likes_filled_red.png'
import comment from './images/comment.png'
import { addLike } from "../../store/likes";

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
  passId
}) => {


// const [showModal, setShowModal] = useState(false);
// const [postId, setPostId] = useState(id);
const handleClick = () => {
  showPost();
  passId();
}

const post_likes = useSelector((state) => state.posts[id].likes)

const total_likes = new Set(post_likes.filter((like) => like[2] === true).map((like) => like[0]))

const sessionUser = useSelector((state) => state.session.user)



console.log("LIKES:", likes)
const dispatch = useDispatch();

const like = (id, user_id) => {
  console.log(sessionUser.id);
  dispatch(addLike(id, sessionUser.id))
};


  return (
    <div className="post-box">
      {/* {showModal && (
        <DisplayPostModal postId={postId} setShowModal={setShowModal} />
      )} */}
      <div className="user">
        <img className="profile-image-post" src={profile_image}/>
        <NavLink className="username_link" to={`/users/${user_id}`}>
          {username}
        </NavLink>
      </div>
      <div className="photo-holder">
        <img className="photo"
        src={photos} alt="post-photo"
        onClick={handleClick}/>
      </div>
      <div className="description">{description}</div>
      <div className="post-icons">

        {total_likes.has(sessionUser.id) ? <img src={liked} className="like-icon"></img> : <img src={like_empty}
      className="like-icon" onClick={() => like(id, user_id)}></img>}
      {/* <img src={liked} className="like-icon"></img> */}
        <img src={comment}
        className="comment-icon"
        onClick={handleClick}></img>
      </div>
      <div className="likes">{total_likes.size} likes</div>
      <div className="comments">{comments} comments</div>
    </div>
  );
};

export default Post;
