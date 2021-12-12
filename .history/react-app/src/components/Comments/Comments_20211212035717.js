import React, { useEffect, useState } from "react";
import { getAllComments } from "../../store/comments";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import "../Feed/post.css";
import { updateAComment, deleteAComment } from "../../store/comments";

const Comment = ({ post_id }) => {
  const sessionUser = useSelector((state) => state.session.user);
  const comments = useSelector((state) => Object.values(state.comments));
  const [editableComment, setEditableComment] = useState(false);
  const dispatch = useDispatch();
  const [commContent, setCommContent] = useState("");

  const handleEdit = async (pid, id, content) => {
    dispatch(updateAComment(pid, id, content));
    setEditableComment(false);
  };
  useEffect(() => {
    dispatch(getAllComments(post_id));
  }, [dispatch, post_id]);

  const handleDelete = async (pid, id) => {
    dispatch(deleteAComment(pid, id));
    // setEditableComment(false);
  };

  handleDelete(5, 5)

  return (
    <div className="commentContainer">
      {comments?.reverse().map(({ id, user_id, content, username }) => (
        <>
          <div className="commentBox">
            <div className="username_link">
              <NavLink className="username_link" to={`/users/${user_id}`}>
                {username}
              </NavLink>
            </div>
            <div className="commentContent">{content}</div>
          </div>
          {sessionUser.id === user_id && (
            <div>
            <button onClick={() => setEditableComment(true)}>Edit</button>
            <button onClick={() => setEditableComment(true)}>Delete</button>
            </div>
          )}
          {editableComment && (
            <>
              <input
                className="edit-comment-field"
                defaultValue={content}
                type="text"
                onChange={(e) => setCommContent(e.target.value)}
              ></input>
              <button onClick={() => handleEdit(post_id, id, commContent)}>
                Submit
              </button>
            </>
          )}
        </>
      ))}
    </div>
  );
};

export default Comment;
