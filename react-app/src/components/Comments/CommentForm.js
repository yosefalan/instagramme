import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAComment } from "../../store/comments";
import './CommentForm.css'


export default function CommentForm({ pid }) {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState([]);

  const validate = () => {
    const validationErrors = [];

    if (body.length < 2) validationErrors.push("Comments must be at least 2 characters long.");
    if (body.length > 255) validationErrors.push("Comments cannot exceed 255 characters in length.");

    return validationErrors;
  }

  const reset = () => {
    setBody("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate();

    if (errors.length > 0) {
      setErrors(errors);
    } else {
      setErrors([]);
      dispatch(addAComment(pid, sessionUser.id, body));
      reset();
    }

  };

  if (!sessionUser) {
    return (
      <>
        <div>
          <span>Sign in to comment</span>
        </div>
      </>
    );
  }
  return (
    <>
      <div id="comment-form-container">
        {errors.length !== 0 && <ul>
          {errors.map((error, idx) => (
            <li key={idx} style={{color: "red"}}>{error}</li>
          ))}
        </ul>}
        <form onSubmit={handleSubmit} id="comment-form-form">
          <div id="dummy-emoji-placeholder"></div>
          <textarea
            id="comment-form-textarea"
            // style={{height: "18px"}}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            name="body"
            placeholder="Add a comment..."
          ></textarea>
          <button className="postBtn" id="post-comment-button" type="submit">
            Post
          </button>
        </form>
      </div>
    </>
  );
}
