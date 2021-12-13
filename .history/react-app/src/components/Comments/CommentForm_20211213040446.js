import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAComment } from "../../store/comments";
import './'


export default function CommentForm({ pid }) {
  const sessionUser = useSelector((state) => state.session.user);

  const dispatch = useDispatch();

  const [body, setBody] = useState("");
  const [errors, setErrors] = useState([]);

  const reset = () => {
    setBody("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (body.length >= 0) {
      setErrors([]);
      dispatch(addAComment(pid, sessionUser.id, body));
    }

    reset();
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
      <div>
        <form onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <textarea
            id="comment-form-textarea"
            rows="2"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            name="body"
            placeholder="Add a comment"
          ></textarea>
          <button className="postBtn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
