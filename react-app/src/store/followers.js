import { csrfFetch } from "./csrf";

//action types
const LOAD_FOLLOWERS = "followers/LOAD_FOLLOWERS";
const REMOVE_FOLLOWER = "followers/REMOVE_FOLLOWER";
const RESET_FOLLOWERS = "followers/RESET_FOLLOWERS";
const ADD_FOLLOWER = "followers/ADD_FOLLOWER";


const load = (followers) => ({
    type: LOAD_FOLLOWERS,
    followers
});


const add = (follower) => ({
    type: ADD_FOLLOWER,
    follower,
})

const removeOne = (followerId) => ({
    type: REMOVE_FOLLOWER,
    followerId
})

const reset = () => ({
    type: RESET_FOLLOWERS
})

export const getFollowers = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/${id}/followers`);

    if (response.ok) {
        const followers = await response.json();
        dispatch(load(followers));
    }
}

export const removeFollower = (userId, followerId) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/${userId}/followers/${followerId}`, {
        method: "DELETE"
    });

    if (response.ok) {
        dispatch(removeOne(followerId));
    }
}

export const resetFollowers = () => async (dispatch) => {
    dispatch(reset());
}

export const addFollower = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/${id}/follow`);

    if (response.ok) {
        const newFollower = await response.json();
        dispatch(add(newFollower))
    }
}


const initialState = [];

const followersReducer = (state = initialState, action) => {
    let newState = [];
    switch (action.type) {
        case LOAD_FOLLOWERS: {
            let followers = Object.values(action.followers);
            newState = [...followers];
            return newState;
        }
        case REMOVE_FOLLOWER: {
            let followers = state.filter(follower => follower["id"] !== action.followerId);
            newState = [...followers];
            return newState;
        }
        case RESET_FOLLOWERS: {
            return [];
        }
        default:
            return state;
    }
}

export default followersReducer;
