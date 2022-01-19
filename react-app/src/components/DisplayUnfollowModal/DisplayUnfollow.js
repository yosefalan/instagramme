// import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { removeOneFollowed, getFollowing } from "../../store/following";
import { getFollowers } from "../../store/followers";
// import DisplayBlockFollowerModal from '../DisplayBlockFollowerModal';
import "./DisplayUnfollow.css";
import { deleteSuserFollowed, getSuserFollows } from "../../store/follows";

function DisplayUnfollow({ userId, sessionUserId, unfollowId, setUnfollowId, unfollowName, setUnfollowName, setShowUnfollowModal }) {
    const dispatch = useDispatch();


    const handleCancelClick = () => {
        setUnfollowId("");
        setUnfollowName("");
        setShowUnfollowModal(false);
    }

    const handleUnfollowClick = async (userId, sessionUserId, unfollowId) => {
        // await dispatch(removeOneFollowed(sessionUserId, blockFollowerId));
        // await dispatch(getFollowing(userId));
        // await dispatch(getFollowers(userId));
        await dispatch(deleteSuserFollowed(unfollowId));
        // console.log("userId:", userId);
        // console.log("sessionUserId:", sessionUserId);
        if (+userId === sessionUserId) {
            await dispatch(getFollowing(userId));
        }
        await setUnfollowId("");
        await setUnfollowName("");
        // await dispatch(getSuserFollows());
        await setShowUnfollowModal(false);
        // window.location.reload(false);
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