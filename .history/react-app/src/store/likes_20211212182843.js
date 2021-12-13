import { csrfFetch } from "./csrf";

// action types
const LOAD_LIKES = "likes/LOAD_LIKES";
const ADD_LIKE = "likes/ADD_LIKE";
const REMOVE_LIKE = "likes/REMOVE_LIKE";

const getLikes = (likes) => ({
  type: LOAD_LIKES,
  payload: likes,
});

const addLike = (like) => ({
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

export const addLike = (postId) => async (dispatch) => {
  const res = await fetch(`/api/posts/${postId}/likes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  dispatch(getFollowingPosts(data));
};


export const addLike = (data, postId) => async (dispatch) => {
  const res = await csrfFetch(`/api/posts/${postId}/likes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  if (res.ok) {
    const like = await res.json();
    dispatch(addLike(like));
    return like;
  }
};

export const deleteLike = (postId, id) => async (dispatch) => {
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
