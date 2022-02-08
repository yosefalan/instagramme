// import { csrfFetch } from "./csrf";

//action types
const LOAD_FOLLOWING = "following/LOAD_FOLLOWING";
const REMOVE_ONE_FOLLOWED = "following/REMOVE_ONE_FOLLOWED";
const ADD_ONE_FOLLOWED = "following/ADD_ONE_FOLLOWED";
const RESET_FOLLOWING = "following/RESET_FOLLOWING"

const load = (following) => ({
    type: LOAD_FOLLOWING,
    following
});

const removeOne = (followedId) => ({
    type: REMOVE_ONE_FOLLOWED,
    followedId
})

const addOne = (followedId) => ({
    type: ADD_ONE_FOLLOWED,
    followedId
})

const reset = () => ({
    type: RESET_FOLLOWING
})

export const getFollowing = (id) => async (dispatch) => {
    const response = await fetch(`/api/users/${id}/following`);
    
    if (response.ok) {
        const following = await response.json();
        dispatch(load(following));
    }
}

export const removeOneFollowed = (userId, followedId) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}/following/${followedId}`, {
        method: "DELETE"
    })

    if (response.ok) {
        dispatch(removeOne(followedId));
    }
}

export const addFollowed = (userId, followedId) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}/following/${followedId}`, {
        method: "PUT"
    })

    if (response.ok) {
        dispatch(addOne(followedId));
    }
}

export const resetFollowing = () => async (dispatch) => {
    dispatch(reset());
}

const initialState = [];

const followingReducer = (state = initialState, action) => {
    let newState = [];
    switch (action.type) {
        case LOAD_FOLLOWING:
            let following = Object.values(action.following);
            newState = [...following];
            return newState;
        case REMOVE_ONE_FOLLOWED: {
            let following = state.filter(following => following["id"] !== action.followedId);
            newState = [...following];
            return newState;
        }
        case RESET_FOLLOWING: {
            return [];
        }
        default:
            return state;
    }
}

export default followingReducer;