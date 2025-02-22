// import { csrfFetch } from "./csrf";

// action types
// const LOAD_LIKES = "likes/LOAD_LIKES";
const ADD_LIKE = "likes/ADD_LIKE";
const REMOVE_LIKE = "likes/REMOVE_LIKE";

// const getLikes = (likes) => ({
//   type: LOAD_LIKES,
//   payload: likes,
// });

const addALike = (like) => ({
  type: ADD_LIKE,
  payload: like,
});

const removeLike = (id) => ({
  type: REMOVE_LIKE,
  payload: id,
});

// export const fetchLikes = () => async (dispatch) => {
//   const res = await fetch("/api/likes");
//   if (res.ok) {
//     const likes = await res.json();
//     dispatch(getLikes(likes));
//   } else {
//     throw res;
//   }
// };

export const addLike = (post_id, user_id) => async (dispatch) => {
  // const data = { post_id, user_id };
  const res = await fetch(`/api/posts/${post_id}/likes/${user_id}`, {
    method: "POST",
    // headers: { "Content-Type": "application/json" },
    // body: JSON.stringify({ like: true }),
  });
  if (res.ok) {
    const like = await res.json();
    dispatch(addALike(like));
    return like;
  }
};

export const deleteLike = (postId, userId, lid) => async (dispatch) => {
  const response = await fetch(`/api/posts/${postId}/likes/${userId}`, {
    method: "DELETE",
  });
  
  if (response.ok) {
    dispatch(removeLike({ postId, userId, lid }));
  }
};

// const initialState = {};

// const likesReducer = (state = initialState, action) => {
//   let newState = {};
//   switch (action.type) {
//     case LOAD_LIKES: {
//       console.log("Hi from LOAD_LIKES in the Likes store!");
//       action.payload.forEach((like) => (newState[like.id] = like));
//       return newState;
//       // return action.likes.reduce((likes, like) => {
//       //   likes[like.id] = like
//       //   return likes
//       // },{})
//     }

//     // case ADD_LIKE:
//     //   newState = { ...state, [action.payload.post_id]: action.payload.like };
//     //   return newState;

//     // case REMOVE_LIKE:
//     //   newState = { ...state };
//     //   delete newState[action.payload.postId].likes[action.payload.lid];
//     //   return newState;
//     default:
//       return state;
//   }
// };

// export default likesReducer;
