import { csrfFetch } from "./csrf";

//action types
const LOAD_FOLLOWING = "followers/LOAD_FOLLOWING"

const load = (following) => ({
    type: LOAD_FOLLOWING,
    following
});

export const getFollowing = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/${id}/following`);

    if (response.ok) {
        const following = await response.json();
        dispatch(load(following));
    }
}

const initialState = [];

const followingReducer = (state = initialState, action) => {
    let newState = [];
    switch (action.type) {
        case LOAD_FOLLOWING:
            let following = Object.values(action.following);
            newState = [...following];
            return newState;
        default:
            return state;
    }
}

export default followingReducer;