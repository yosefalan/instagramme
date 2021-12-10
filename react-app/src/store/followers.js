import { csrfFetch } from "./csrf";

//action types
const LOAD_FOLLOWERS = "followers/LOAD_FOLLOWERS"

const load = (followers) => ({
    type: LOAD_FOLLOWERS,
    followers
});

export const getFollowers = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/${id}/followers`);

    if (response.ok) {
        const followers = await response.json();
        dispatch(load(followers));
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