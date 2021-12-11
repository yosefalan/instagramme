import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getFollowing, addFollowed } from "../../store/following";
import DisplayUnfollowModal from '../DisplayUnfollowModal'
import "./DisplayFollowing.css";

// import { } from '../../store/followers'

function DisplayFollowing({ userId, setShowFollowingModal }) {
    const [showUnfollowModal, setShowUnfollowModal] = useState(false);
    const [unfollowId, setUnfollowId] = useState("");
    const [unfollowName, setUnfollowName] = useState("");
    const sessionUser = useSelector((state) => state.session.user);
    const following = useSelector(state => state.following);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getFollowing(userId))
    }, [dispatch, userId]);

    const handleClick = (followeeId) => {
        setShowFollowingModal(false);
        history.push(`/users/${followeeId}`);
    }

    const handleUnfollowClick = (unfollowId, unfollowName) => {
        setUnfollowId(unfollowId);
        setUnfollowName(unfollowName);
        setShowUnfollowModal(true);
    }

    const handleFollowClick = (userId, followedId) => {
        dispatch(addFollowed(userId, followedId));
        userId = userId;
    }

    return (
        <>
            <div className="follows-modal-container">
                <div className='follows-modal-heading'>
                    <div className='follows-modal-heading-text'>Following</div>
                    {showUnfollowModal && (
                        <DisplayUnfollowModal userId={userId} unfollowId={unfollowId} setUnfollowId={setUnfollowId} unfollowName={unfollowName} setUnfollowName={setUnfollowName} setShowUnfollowModal={setShowUnfollowModal} />
                    )}
                </div>
                <div className="follows-modal-list">
                    {following?.map((followee) => {
                        return (
                            <div className="follows-modal-list-row" key={followee.id}>
                                <div className="follows-modal-profile-pic-container">Pic</div>
                                <div className="follows-modal-username"><div className="follows-modal-username-link" onClick={() => { handleClick(followee.id) }}>{followee.username}</div></div>
                                <div className="follows-modal-list-button-container">
                                    {sessionUser.id == userId && <button className="follows-modal-remove-button" onClick={() => {handleUnfollowClick(followee.id, followee.username)}}>Following</button>}
                                    {sessionUser.id != userId && (sessionUser.following.length === 0 || sessionUser.following.indexOf(followee.id) == -1) && sessionUser.id != followee.id && <button className="follows-modal-follow-button" onClick={() => { handleFollowClick(userId, followee.id) }}>Follow</button>}
                                    {sessionUser.id != userId && (sessionUser.following.indexOf(followee.id) >= 0) && sessionUser.id != followee.id && <button className="follows-modal-following-button" onClick={() => { handleUnfollowClick(followee.id, followee.username) }}>Following</button>}
                                </div>
                            </div>
                            // <div key={followee.id}>{followee.username}</div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default DisplayFollowing;