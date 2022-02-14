import React, { useEffect, useState } from "react";
import { getAllComments } from "../../store/comments";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
// import './CommentForm.css'
import { updateAComment, deleteAComment } from "../../store/comments";
import { getOnePost } from "../../store/posts";
// import CommentForm from "./CommentForm";
import './Comments.css';

const Comment = ({ post_id }) => {
  const sessionUser = useSelector((state) => state.session.user);
  const comments = useSelector((state) => Object.values(state.comments));
  const [editableComment, setEditableComment] = useState("");
  const dispatch = useDispatch();
  const [commContent, setCommContent] = useState("");
  const [errors, setErrors] = useState([]);

  const validate = () => {
    const validationErrors = [];

    if (commContent.length < 2) validationErrors.push("Comments must be at least 2 characters long.");
    if (commContent.length > 255) validationErrors.push("Comments cannot exceed 255 characters in length.");

    return validationErrors;
  }

  const handleEdit = async (pid, id, content) => {

    const errors = validate();

    if (errors.length > 0) {
      setErrors(errors);
    } else {
      setErrors([]);
      await dispatch(updateAComment(pid, id, content));
      setEditableComment("");
    }

  };
  
  useEffect(() => {
    dispatch(getAllComments(post_id));
  }, [dispatch, post_id]);

  const handleDelete = async (pid, id) => {
    await dispatch(deleteAComment(pid, id));
    await dispatch(getOnePost(pid));
    setEditableComment("");
  };

  return (
    <>
      {comments?.reverse().map(({ id, user_id, content, username, profile_image }) => (
        <ul className="comment-container" key={id}>
          <div className="comment-container-2">
            <li className="comment-container-3">

              <div className="comment-container-4">
                <div className="comment-container-5">
                  <div className="comment-pic-container">
                    <div className="comment-pic-container-2">
                      <NavLink className="comment-pic-link" to={`/users/${user_id}`}>
                        <img className="comment-pic-img" src={profile_image} alt=""></img>
                      </NavLink>
                    </div>
                  </div>
                  <div className="comment-text-container">
                    <h3 className="comment-text-username">
                      <div className="comment-text-username-2">
                        <span className="comment-text-username-span">
                          <NavLink className="comment-text-username-link" to={`/users/${user_id}`}>
                            {username}
                          </NavLink>
                        </span>
                      </div>
                    </h3>
                    <span className="comment-text-span">{content}</span>
                    {/* <div className="comment-timestamp-container">
                      <div className="comment-timestamp-container-2">
                        <time>[timestamp]</time>
                      </div>
                    </div> */}
                  </div>
                </div>
                {sessionUser.id === user_id && (
                  <div className="comment-edit-buttons">
                    <button className='postBtn' onClick={() => {
                      setCommContent(content);
                      setEditableComment(id);
                    }}
                    >Edit</button>
                    <button className='postBtn' onClick={() => { handleDelete(post_id, id) }}>Delete</button>
                  </div>
                )}
              </div>

              {editableComment && editableComment === id && sessionUser.id === user_id && (
                <>
                  {errors.length !== 0 && <ul>
                    {errors.map((error) => (
                      <li key={error} style={{ color: "red" }}>{error}</li>
                    ))}
                  </ul>}
                  <input
                    className="edit-comment-field"
                    value={commContent}
                    type="text"
                    onChange={(e) => setCommContent(e.target.value)}
                  ></input>
                  <button className='postBtn' onClick={() => handleEdit(post_id, id, commContent)}>
                    Submit
                  </button>
                </>
              )}



            </li>
          </div>
        </ul>
      ))}
    </>
  );
};

export default Comment;
