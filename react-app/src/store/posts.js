// import { csrfFetch } from "./csrf";

// action types
const LOAD_POSTS = "posts/LOAD_POSTS";
const ADD_POST = "posts/ADD_POST";
const UPDATE_POST = "posts/UPDATE_POST";
const REMOVE_POST = "posts/REMOVE_POST";
const ADD_LIKE = "likes/ADD_LIKE";
const REMOVE_LIKE = "likes/REMOVE_LIKE";

//action creators
const load = (posts) => ({
  type: LOAD_POSTS,
  posts,
});

const update = (post) => ({
  type: UPDATE_POST,
  post,
});

// const add = (post) => ({
//   type: ADD_POST,
//   post,
// });

const remove = (postId) => ({
  type: REMOVE_POST,
  postId,
});

//thunk action dispatchers

export const getPosts = () => async (dispatch) => {
  console.log("trying to get posts");
  const response = await fetch("/api/posts/");

  if (response.ok) {
    const posts = await response.json();
    dispatch(load(posts));
    console.log("!!!!!!!!!!!!!!!!", posts)
  }
};

export const getUserPosts = (userId) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}/posts`);

  if (response.ok) {
    const posts = await response.json();
    dispatch(load(posts));
  }
};

// export const getOnePost = (postId) => async (dispatch) => {
//   const response = await csrfFetch(`/api/posts/${postId}/`);

//   if (response.ok) {
//     const post = await response.json();
//     dispatch(add(post));
//   }
// };

// export const createPost = (postData) => async (dispatch) => {
//   console.log("***************", postData)
//   const response = await csrfFetch("/api/posts/", {
//     method: "POST",
//     body: JSON.stringify(postData),
//   });

//   if (response.ok) {

//     const post = await response.json();
//     dispatch(add(post));
//   }
// };

/************************************************** */

export const createPost = (postData) => async (dispatch) => {
  const { user_id, description, file } = postData;

  const form = new FormData();
  form.append("user_id", user_id);
  form.append("description", description);
  form.append("file", file);

  const res = await fetch("/api/posts", {
    method: "POST",
    body: form,
  });
};

export const editPost = (id, postData) => async (dispatch) => {
  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  });

  if (response.ok) {
    const editedPost = await response.json();
    dispatch(update(editedPost));
  }
};

export const deletePost = (postId) => async (dispatch) => {
  const response = await fetch(`/api/posts/${postId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    dispatch(remove(postId));
  }
};

const initialState = {};

const postsReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case LOAD_POSTS:
      let posts = Object.values(action.posts);
      posts.forEach((post) => {
        newState[post.id] = post;
      });
      return newState;
    case ADD_POST:
      return { ...state, [action.post.id]: action.post };
    case UPDATE_POST:
      return { ...state, [action.post.id]: action.post };
    case REMOVE_POST:
      newState = { ...state };
      delete newState[action.postId];
      return newState;
    case ADD_LIKE:
      newState = { ...state };
      newState[action.payload.post_id].likes.push([
        action.payload.user_id,
        action.payload.post_id,
        action.payload.like,
      ]);
      return newState;
    case REMOVE_LIKE:
      newState = { ...state };
      let postLike = newState[action.payload.postId].likes.indexOf(
        action.payload.lid
      );
      newState[action.payload.postId].likes.splice(postLike, 1);
      return newState;
    default:
      return state;
  }
};

export default postsReducer;
