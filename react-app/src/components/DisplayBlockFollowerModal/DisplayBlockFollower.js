// import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { getFollowers } from "../../store/followers";
import { deleteSuserFollower } from "../../store/follows";
// import DisplayBlockFollowerModal from '../DisplayBlockFollowerModal';
import "./DisplayBlockFollower.css";

function DisplayBlockFollower({ userId, sessionUserId, blockFollowerId, setBlockFollowerId, blockFollowerName, setBlockFollowerName, setShowBlockFollowerModal, setUser }) {
    const dispatch = useDispatch();

    
    const handleCancelClick = () => {
        setBlockFollowerId("");
        setBlockFollowerName("");
        setShowBlockFollowerModal(false);
    }

    const handleRemoveClick = async (userId, sessionUserId, blockFollowerId) => {
        await dispatch(deleteSuserFollower(blockFollowerId));
        // await dispatch(removeFollower(sessionUserId, blockFollowerId));
        await dispatch(getFollowers(userId));
        const response = await fetch(`/api/users/${userId}`)
        const user = await response.json();
        setUser(user);
        // dispatch(deleteSuserFollower(blockFollowerId));
        // dispatch(getSuserFollows());
        setBlockFollowerId("");
        setBlockFollowerName("");
        setShowBlockFollowerModal(false);
        // NEED ERROR HANDLING?
    }

    return (
        <>
            <div className="block-follower-modal-container">
                <div className="block-follower-message-container">
                    <div id="block-follower-message">Remove Follower?</div>
                    <br></br>
                    <div>{blockFollowerName}</div>
                </div>
                <div className="block-follower-buttons-container">
                    <div className="button-row"><div id="block-follower-button" onClick={() => handleRemoveClick(userId, sessionUserId, blockFollowerId)}>Remove</div></div>
                    <div className="button-row"><div id="cancel-block-follower-button" onClick={() => handleCancelClick()}>Cancel</div></div>
                </div>
            </div>
        </>
    )
}

export default DisplayBlockFollower;