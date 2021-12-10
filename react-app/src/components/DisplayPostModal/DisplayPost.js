// import React, { useEffect } from 'react';
// import { useSelector } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./DisplayPost.css";

import {deletePost} from '../../store/posts'

import Comment from "../Comments/CommentForm";



function DisplayPost({ postId, setShowModal }) {
  const sessionUser = useSelector((state) => state.session.user);
  const posts = useSelector((state) => state.posts);
  const post = posts[postId];
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deletePost(id));
    setShowModal(false);
  };

//   const handleEdit = (id) => {
//       dispatch(editPost(id));
//   }

  return (
    <>
      <div id="post-modal-container">
        <div id="post-modal-image-container">
          <div id="post-modal-image-wrapper">
            <div id="inner-div">
              <img src={post["photos"]} alt=""></img>
            </div>
          </div>
        </div>
        <div id="post-modal-right-container">
          <div id="top-right-container" className="right-column-div">
            <div>
              <div id="profile-pic-holder">
                <img id="profile-pic" src={post.profile_image} alt=""></img>
              </div>
            </div>
            <div>{post.username}</div>
            <div>
              {post.user_id === sessionUser.id && <button>Edit</button>}{" "}
              {post.user_id === sessionUser.id && <button onClick={() => handleDelete(postId)}>Delete</button>}
            </div>
          </div>

          <div className='right-column-div' contentEditable='false' >
              {post.description}
          </div>
          
          <div className="right-column-div">
            <Comment post_id={postId} />
          </div>
          <div className="right-column-div">Button Bar</div>
          <div className="right-column-div">
            {post.likes} {post.likes === 1 ? "like" : "likes"}
          </div>
          <div className="right-column-div">New Comment Form</div>
        </div>
      </div>
    </>
  );
}
export default DisplayPost;
