import React from "react";
import { getAllComments } from "../../store/comments";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import "../Feed/post.css";
import CommentForm from "./CommentForm";

const Comment = ({ post_id }) => {
  const sessionUser = useSelector((state) => statesession.user);
  const comments = useSelector((state) => Object.values(state.comments));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllComments(post_id));
  }, [dispatch]);
  return (
    <div className="commentContainer">
      {comments?.reverse().map(({ user_id, content, username }) => (
        <div className="commentBox">
          <div className="username_link">
            <NavLink className="username_link" to={`/users/${user_id}`}>
              {username}
            </NavLink>
          </div>
          <div className="commentContent">{content}</div>
        </div>
      ))}
      <CommentForm post_id={post_id} user_id={sessionUser.id} />
    </div>
  );
};

export default Comment;
