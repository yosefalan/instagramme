import { csrfFetch } from "./csrf";

//action types
const LOAD_FOLLOWERS = "followers/LOAD_FOLLOWERS";
const REMOVE_FOLLOWER = "followers/REMOVE_FOLLOWER";

const load = (followers) => ({
    type: LOAD_FOLLOWERS,
    followers
});

const removeOne = (followerId) => ({
    type: REMOVE_FOLLOWER,
    followerId
})

export const getFollowers = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/${id}/followers`);

    if (response.ok) {
        const followers = await response.json();
        dispatch(load(followers));
    }
}

export const removeFollower = (userId, followerId) => async (dispatch) => {
    const response = await csrfFetch(`api/users/${userId}/followers/${followerId}`, {
        method: "DELETE"
    });

    if (response.ok) {
        dispatch(removeOne(followerId));
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
            let followers = state.filter(follower => follower["id"] != action.followerId);
            newState = [...followers];
            return newState;
        }
        default:
            return state;
    }
}

export default followersReducer;