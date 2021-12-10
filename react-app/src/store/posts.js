import { csrfFetch } from "./csrf";

// action types
const LOAD_POSTS = "posts/LOAD_POSTS";
const ADD_POST = "posts/ADD_POST";
const UPDATE_POST = "posts/UPDATE_POST";
const REMOVE_POST = "posts/REMOVE_POST";

//action creators
const load = (posts) => ({
  type: LOAD_POSTS,
  posts,
});

const update = (post) => ({
  type: UPDATE_POST,
  post,
});

const add = (post) => ({
  type: ADD_POST,
  post,
});

const remove = (postId) => ({
  type: REMOVE_POST,
  postId,
});

//thunk action dispatchers

export const getPosts = () => async (dispatch) => {
  console.log("############", "this is regular get");
  const response = await csrfFetch("/api/posts/");

  if (response.ok) {
    const posts = await response.json();
    dispatch(load(posts));
  }
};

export const getUserPosts = (userId) => async (dispatch) => {
  console.log("############", "this is user get");
  const response = await csrfFetch(`/api/users/${userId}/posts`);

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

  console.log("))))))))))))))))", postData)
  const {
      user_id,
      description,
      file
  } = postData;

  const form = new FormData();
  form.append('user_id', user_id);
  form.append('description', description)
  form.append('file', file);

  const res = await fetch('/api/posts/', {
      method: "POST",
      body: form

  });
};



export const editPost = (postData) => async (dispatch) => {
  const response = await csrfFetch(`/api/posts/${postData.id}/`, {

    method: "PUT",
    body: JSON.stringify(postData),
  });

  if (response.ok) {
    const editedPost = await response.json();
    dispatch(update(editedPost));
  }
};

export const deletePost = (postId) => async (dispatch) => {
  const response = await csrfFetch(`/api/posts/${postId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    dispatch(remove(postId));
  }
};

const initialState = {};

const postsReducer = (state = initialState, action) => {
  let newState = {};
  console.log("########", action);
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
    default:
      return state;
  }
};

export default postsReducer;
