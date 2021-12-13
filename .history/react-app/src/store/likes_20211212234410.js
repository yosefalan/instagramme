import { csrfFetch } from "./csrf";

// action types
const LOAD_LIKES = "likes/LOAD_LIKES";
const ADD_LIKE = "likes/ADD_LIKE";
const REMOVE_LIKE = "likes/REMOVE_LIKE";

const getLikes = (likes) => ({
  type: LOAD_LIKES,
  payload: likes,
});

const addALike = (like) => ({
  type: ADD_LIKE,
  payload: like,
});

const removeLike = (id) => ({
  type: REMOVE_LIKE,
  payload: id,
});

export const fetchLikes = () => async (dispatch) => {
  const res = await csrfFetch("/api/likes");
  if (res.ok) {
    const likes = await res.json();
    dispatch(getLikes(likes));
  } else {
    throw res;
  }
};


export const addLike = (id, user_id) => async (dispatch) => {
  const data = { id, user_id}
  const res = await csrfFetch(`/api/posts/${id}/likes/${user_id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify("like": true),
  });
  console.log("!!!!!!!!!!!!!!!!!!!!!!", data)
  if (res.ok) {
    const like = await res.json();
    dispatch(addALike(like));
    return like;
  }
};

export const addUnlike = (postId, id) => async (dispatch) => {
  const response = await csrfFetch(`/api/posts/${postId}/likes/${id}`, {
    method: "PUT",
  });
  if (response.ok) {
    dispatch(removeLike(id));
  }
};

const initialState = {};

const likesReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case LOAD_LIKES: {
      action.payload.forEach((like) => (newState[like.id] = like));
      return newState;
      // return action.likes.reduce((likes, like) => {
      //   likes[like.id] = like
      //   return likes
      // },{})
    }

    case ADD_LIKE:
      newState = { ...state, [action.payload.like.id]: action.payload.like };
      return newState;

    case REMOVE_LIKE:
      newState = { ...state };
      delete newState[action.payload.id];
      return newState;
    default:
      return state;
  }
};

export default likesReducer;
