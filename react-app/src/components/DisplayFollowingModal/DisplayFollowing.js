import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { resetFollowers } from '../../store/followers';
import { getFollowing, addFollowed, resetFollowing } from "../../store/following";
import { getSuserFollows, addSuserFollowed } from '../../store/follows';
import DisplayUnfollowModal from '../DisplayUnfollowModal'
import "./DisplayFollowing.css";

// import { } from '../../store/followers'

function DisplayFollowing({ userId, setShowFollowingModal }) {
    const [showUnfollowModal, setShowUnfollowModal] = useState(false);
    const [unfollowId, setUnfollowId] = useState("");
    const [unfollowName, setUnfollowName] = useState("");
    const sessionUser = useSelector((state) => state.session.user);
    const following = useSelector(state => state.following);
    // const suserFollowers = useSelector(state => Object.values(state.follows.followers).map(followerObj => followerObj.id));
    const suserFollowing = useSelector(state => Object.values(state.follows.following).map(followeeObj => followeeObj.id));
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getFollowing(userId))
    }, [dispatch, userId]);

    const handleClick = (followeeId) => {
        dispatch(resetFollowing());
        dispatch(resetFollowers());
        setShowFollowingModal(false);
        history.push(`/users/${followeeId}`);
    }

    const handleUnfollowClick = (unfollowId, unfollowName) => {
        setUnfollowId(unfollowId);
        setUnfollowName(unfollowName);
        setShowUnfollowModal(true);
    }

    const handleFollowClick = async (followedId) => {
        // await dispatch(addFollowed(sessionUserId, followedId));
        // await dispatch(getSuserFollows());
        // setShowFollowingModal(true);
        dispatch(addSuserFollowed(followedId));
    }

    return (
        <>
            <div className="follows-modal-container">
                <div className='follows-modal-heading'>
                    <div className='follows-modal-heading-text'>Following</div>
                    {showUnfollowModal && (
                        <DisplayUnfollowModal userId={userId} sessionUserId={sessionUser.id} unfollowId={unfollowId} setUnfollowId={setUnfollowId} unfollowName={unfollowName} setUnfollowName={setUnfollowName} setShowUnfollowModal={setShowUnfollowModal} />
                    )}
                </div>
                <div className="follows-modal-list">
                    {following?.map((followee) => {
                        return (
                            <div className="follows-modal-list-row" key={followee.id}>
                                <div className="follows-modal-profile-pic-container"><img id="followed-profile-pic" src={followee.profile_image} alt=""></img></div>
                                <div className="follows-modal-username"><div className="follows-modal-username-link" onClick={() => { handleClick(followee.id) }}>{followee.username}</div></div>
                                <div className="follows-modal-list-button-container">
                                    {sessionUser.id === userId && <button className="follows-modal-remove-button" onClick={() => {handleUnfollowClick(followee.id, followee.username)}}>Following</button>}
                                    {sessionUser.id !== userId && (suserFollowing.length === 0 || suserFollowing.indexOf(followee.id) === -1) && sessionUser.id !== followee.id && <button className="follows-modal-follow-button" onClick={() => { handleFollowClick(followee.id) }}>Follow</button>}
                                    {sessionUser.id !== userId && (suserFollowing.indexOf(followee.id) >= 0) && sessionUser.id !== followee.id && <button className="follows-modal-following-button" onClick={() => { handleUnfollowClick(followee.id, followee.username) }}>Following</button>}
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