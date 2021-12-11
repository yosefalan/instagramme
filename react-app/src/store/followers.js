import { csrfFetch } from "./csrf";

//action types
const LOAD_FOLLOWERS = "followers/LOAD_FOLLOWERS"
const ADD_FOLLOWER = "followers/ADD_FOLLOWER"

const load = (followers) => ({
    type: LOAD_FOLLOWERS,
    followers
});
const add = (follower) => ({
    type: ADD_FOLLOWER,
    follower,
})

export const getFollowers = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/${id}/followers`);

    if (response.ok) {
        const followers = await response.json();
        dispatch(load(followers));
    }
}

export const addFollower = (id) =>  async(dispatch) => {
    const response = await csrfFetch(`/api/users/${id}/follow`);

    if(response.ok) {
        const newFollower = await response.json();
        dispatch(add(newFollower))
    }
}

const initialState = [];

const followersReducer = (state = initialState, action) => {
    let newState = [];
    switch (action.type) {
        case LOAD_FOLLOWERS:
            let followers = Object.values(action.followers);
            newState = [...followers];
            return newState;
        default:
            return state;
    }
}

export default followersReducer;
