import { csrfFetch } from "./csrf";
const GET_COMMENTS = "/comments/getComments";
const ADD_COMMENT = "/comments/addComment";
const UPDATE_COMMENT = "/comments/updateComment";
const REMOVE_COMMENT = "/comments/removeComment";

const getComments = (payload) => ({
  type: GET_COMMENTS,
  payload,
});

const addComment = (payload) => ({
  type: ADD_COMMENT,
  payload,
});

const updateComment = (payload) => ({
  type: UPDATE_COMMENT,
  payload,
});

const deleteComment = (id) => ({
  type: REMOVE_COMMENT,
  id,
});

export const getAllComments = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/posts/${id}/comments`);
  if (response.ok) {
    const data = await response.json();
    dispatch(getComments(data));
  }
};

export const addAComment = (id, comment) => async (dispatch) => {
  console.log('************', comment)
  const response = await csrfFetch(`/api/posts/${id}/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(id, comment),
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(addComment(data));
    return data;
  }
};

export const updateAComment = (comment, id) => async (dispatch) => {
  const response = await csrfFetch(`/api/posts/${id}/comment/${comment.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(comment),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(updateComment(data));
    return data;
  }
};

export const deleteAComment = (id, comment) => async (dispatch) => {
  const response = await csrfFetch(`/api/posts/${id}/comments/${comment.id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    dispatch(deleteComment(comment));
  }
};

const initialState = {};
const commentReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case GET_COMMENTS:
      action.payload.forEach((comment) => (newState[comment.id] = comment));
      return newState;
    case ADD_COMMENT:
      newState = {
        ...state,
        [action.payload.comment.id]: action.payload.comment,
      };
      return newState;
    case UPDATE_COMMENT:
      newState = { ...state };
      newState[action.payload.comment.id] = action.payload.comment;
      return newState;
    case REMOVE_COMMENT:
      newState = { ...state };
      delete newState[action.payload.comment.id];
      return newState;
    default:
      return state;
  }
};

export default commentReducer;
