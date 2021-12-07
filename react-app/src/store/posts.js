import { csrfFetch } from "./csrf"

// action types
const LOAD_POSTS = 'posts/LOAD_POSTS'
const ADD_POST = 'posts/ADD_POST'
const UPDATE_POST = 'posts/UPDATE_POST'
const REMOVE_POST = 'posts/REMOVE_POST'


//action creators
const load = ()

const update = (post) => ({
    type: UPDATE_POST,
    payload: post
})

const add = (post) => ({
    type: ADD_POST,
    payload: post
})

const remove = (postId) => ({
    type: REMOVE_POST,
    payload: postId
})

//thunk action creators

const getPosts = 

const getOnePost = 

const addPost =

const editPost =

const deletePost = 

// postsReducer

const initialState = {}

const postsReducer