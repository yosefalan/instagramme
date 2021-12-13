import React, { useState } from "react";
// import { useSelector } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./DisplayPost.css";

import { deletePost, editPost } from "../../store/posts";

import Comment from "../Comments/Comments";
import CommentForm from "../Comments/CommentForm";

function DisplayPost({ postId, setShowModal }) {
  const sessionUser = useSelector((state) => state.session.user);
  const posts = useSelector((state) => state.posts);
  const [editable, isEditable] = useState(false);
  // const [isPostLoaded, setIsPostLoaded] = useState(false);
  const post = posts[postId];
  const [description, setDescription] = useState(post.description);
  const dispatch = useDispatch();

  const handleEdit = async (id, description) => {
    dispatch(editPost(id, description));
    isEditable(false);
  };

  const handleDelete = async (id) => {
    dispatch(deletePost(id));
    setShowModal(false);
  };
  // if (isPostLoaded) {
  //   const editableDescription = document.getElementById(
  //     "post-description-edit"
  //   );
  //   isEditable("true");
  //   editableDescription.addEventListener("focusout", async (e) => {
  //     e.preventDefault();
  //     setDescription(editableDescription.innerHTML());
  //     handleEdit(postId, description);
  //   });
  // }

  // useEffect(() => {
  //   setIsPostLoaded(true);
  // }, []);

  return (
    <>
      <div id="post-modal-container">
        <div id="post-modal-image-container">
          <div id="post-modal-image-wrapper">
            <div id="inner-div">
              <img src={post["photos"]} alt=""
              className="display-photo"
              ></img>
            </div>
          </div>
        </div>
        <div id="post-modal-right-container">
          <div id="top-right-container" className="right-column-div">
            <div>
              <div id="profile-pic-holder">
                <img id="profile-pic"
                className="profile"
                src={post.profile_image} alt=""></img>
              </div>
            </div>
            <div>{post.username}</div>
            <div>
              {post.user_id === sessionUser.id && (
                <button className="postBtn" onClick={() => isEditable(true)}>
                  Edit
                </button>
              )}{" "}
              {editable && (
                <div className="edit-post">
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="edit-description-input"
                    className="textarea"
                  />
                  <button
                    className="postBtn"
                    onClick={() => handleEdit(postId, description)}
                  >
                    Submit
                  </button>
                  <button className="postBtn" onClick={() => isEditable(false)}>
                    Cancel
                  </button>
                </div>
              )}
              {post.user_id === sessionUser.id && (
                <button
                  className="postBtn"
                  onClick={() => handleDelete(postId)}
                >
                  Delete
                </button>
              )}
            </div>
          </div>

          <div className="right-column-div" id="post-description-edit">
            {post.description}
          </div>

          <div className="right-column-div">
            <Comment post_id={postId} />
          </div>
          {/* <div className="right-column-div">Button Bar</div> */}
          <div className="right-column-div">
            {post.likes} {post.likes === 1 ? "like" : "likes"}
          </div>
          <div className="right-column-div">
            <CommentForm pid={post.id} />
          </div>
        </div>
      </div>
    </>
  );
}
export default DisplayPost;
