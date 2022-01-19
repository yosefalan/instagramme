// ACTIONS

const LOAD_SUSER_FOLLOWS = 'follows/LOAD_SUSER_FOLLOWS';
const ADD_SUSER_FOLLOWED = 'follows/ADD_SUSER_FOLLOWED';
const REMOVE_SUSER_FOLLOWED = 'follows/REMOVE_SUSER_FOLLOWED';
const REMOVE_SUSER_FOLLOWER = 'follows/REMOVE_SUSER_FOLLOWER';

// ACTION CREATORS

const load = (follows) => ({
    type: LOAD_SUSER_FOLLOWS,
    follows
})

const addFollowed = (followed) => ({
    type: ADD_SUSER_FOLLOWED,
    followed
})

const removeFollowed = (followedId) => ({
    type: REMOVE_SUSER_FOLLOWED,
    followedId
})

const removeFollower = (followerId) => ({
    type: REMOVE_SUSER_FOLLOWER,
    followerId
})

// THUNK ACTION CREATORS

// get all of Session user's follows

export const getSuserFollows = () => async (dispatch) => {
    const response = await fetch(`/api/follows/`)

    if (response.ok) {
        const follows = await response.json();
        dispatch(load(follows));
    }
}

// add a user to Session user's following list

export const addSuserFollowed = (followedId) => async (dispatch) => {
    console.log("hi from addSuserFollowed:", followedId)
    const response = await fetch(`/api/follows/following/${followedId}`, {
        method: 'POST'
    });

    if (response.ok) {
        const followed = await response.json();
        dispatch(addFollowed(followed));
    }
}

// delete a user from Session user's following list

export const deleteSuserFollowed = (followedId) => async (dispatch) => {
    const response = await fetch(`/api/follows/following/${followedId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        const followedId = await response.json();
        dispatch(removeFollowed(followedId));
    }
}

// delete a user from Session user's followers list

export const deleteSuserFollower = (followerId) => async (dispatch) => {
    const response = await fetch(`/api/follows/followers/${followerId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        const followerId = await response.json();
        dispatch(removeFollower(followerId));
    }
}

// FOLLOWS REDUCER

const initialState = {};

export default function followsReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_SUSER_FOLLOWS:
            return { "followers": action.follows.followers, "following": action.follows.following }
        case ADD_SUSER_FOLLOWED: {
            const newState = { ...state }
            newState.following[action.followed.id] = action.followed
            return newState
        }
        case REMOVE_SUSER_FOLLOWED: {
            const newState = { ...state }
            delete newState.following[action.followedId];
            return newState;
        }
        default:
            return state;
    }
}