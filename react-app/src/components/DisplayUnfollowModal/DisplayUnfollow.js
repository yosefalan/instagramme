// import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { removeOneFollowed, getFollowing } from "../../store/following";
// import DisplayBlockFollowerModal from '../DisplayBlockFollowerModal';
import "./DisplayUnfollow.css";

function DisplayUnfollow({ userId, sessionUserId, unfollowId, setUnfollowId, unfollowName, setUnfollowName, setShowUnfollowModal }) {
    const dispatch = useDispatch();


    const handleCancelClick = () => {
        setUnfollowId("");
        setUnfollowName("");
        setShowUnfollowModal(false);
    }

    const handleUnfollowClick = async (userId, sessionUserId, blockFollowerId) => {
        await dispatch(removeOneFollowed(sessionUserId, blockFollowerId));
        dispatch(getFollowing(userId));
        setUnfollowId("");
        setUnfollowName("");
        setShowUnfollowModal(false);
        // NEED ERROR HANDLING?
    }

    return (
        <>
            <div className="block-follower-modal-container">
                <div className="block-follower-message-container">
                    <div id="block-follower-message">Unfollow {unfollowName}?</div>
                    <br></br>
                </div>
                <div className="block-follower-buttons-container">
                    <div className="button-row"><div id="block-follower-button" onClick={() => handleUnfollowClick(userId, sessionUserId, unfollowId)}>Unfollow</div></div>
                    <div className="button-row"><div id="cancel-block-follower-button" onClick={() => handleCancelClick()}>Cancel</div></div>
                </div>
            </div>
        </>
    )
}

export default DisplayUnfollow;