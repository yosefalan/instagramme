import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { getFollowers, resetFollowers } from "../../store/followers";
// import { addFollowed, resetFollowing } from "../../store/following";
import { addSuserFollowed } from '../../store/follows';
import DisplayBlockFollowerModal from '../DisplayBlockFollowerModal';
import DisplayUnfollowModal from '../DisplayUnfollowModal';
import "./DisplayFollowers.css";

// import { } from '../../store/followers'

function DisplayFollowers({userId, setShowFollowersModal, setUser }) {
    // const [isLoaded, setIsLoaded] = useState(false);
    const [showBlockFollowerModal, setShowBlockFollowerModal] = useState(false);
    const [blockFollowerId, setBlockFollowerId] = useState("");
    const [blockFollowerName, setBlockFollowerName] = useState("");
    const [showUnfollowModal, setShowUnfollowModal] = useState(false);
    const [unfollowId, setUnfollowId] = useState("");
    const [unfollowName, setUnfollowName] = useState("");
    const sessionUser = useSelector((state) => state.session.user);
    const followers = useSelector(state => state.followers);
    // const suserFollowers = useSelector(state => Object.values(state.follows.followers).map(followerObj => followerObj.id));
    const suserFollowing = useSelector(state => Object.values(state.follows.following).map(followeeObj => followeeObj.id));
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getFollowers(userId));
    }, [dispatch, userId]);

    const handleClick = (followerId) => {
        dispatch(resetFollowers());
        // dispatch(resetFollowing());
        setShowFollowersModal(false);
        history.push(`/users/${followerId}`);
    }

    const handleRemoveClick = (followerId, followerName) => {
        setBlockFollowerId(followerId);
        setBlockFollowerName(followerName);
        setShowBlockFollowerModal(true);
    }

    const handleUnfollowClick = (unfollowId, unfollowName) => {
        setUnfollowId(unfollowId);
        setUnfollowName(unfollowName);
        setShowUnfollowModal(true);
    }

    const handleFollowClick = async (followedId) => {
        // await dispatch(addFollowed(sessionUserId, followedId));
        // await dispatch(getFollowers(userId));
        await dispatch(addSuserFollowed(followedId));
        // console.log("HANDLEFOLLOWCLICK");
        // window.location.reload(false);
        const response = await fetch(`/api/users/${userId}`);
        const user = await response.json();
        setUser(user);
    }

    return (
        <>
            <div className="follows-modal-container">
                <div className='follows-modal-heading'>
                    <div className='follows-modal-heading-text'>Followers</div>
                    {showBlockFollowerModal && (
                        <DisplayBlockFollowerModal userId={userId} sessionUserId={sessionUser.id} blockFollowerId={blockFollowerId} setBlockFollowerId={setBlockFollowerId} blockFollowerName={blockFollowerName} setBlockFollowerName={setBlockFollowerName} setShowBlockFollowerModal={setShowBlockFollowerModal} setUser={setUser} />
                    )}
                    {showUnfollowModal && (
                        <DisplayUnfollowModal userId={userId} sessionUserId={sessionUser.id} unfollowId={unfollowId} setUnfollowId={setUnfollowId} unfollowName={unfollowName} setUnfollowName={setUnfollowName} setShowUnfollowModal={setShowUnfollowModal} setUser={setUser}/>
                    )}
                </div>
                <div className="follows-modal-list">
                    {followers?.map((follower) => {
                        return (
                            <div className="follows-modal-list-row" key={follower.id}>
                                <div className="follows-modal-profile-pic-container"><img id="follower-profile-pic" src={follower.profile_image} alt=""></img></div>
                                <div className="follows-modal-username"><div className="follows-modal-username-link" onClick={() => {handleClick(follower.id)}}>{follower.username}</div></div>
                                <div className="follows-modal-list-button-container">
                                    {sessionUser.id === +userId && follower.id !== sessionUser.id && <button className="follows-modal-remove-button" onClick={() => {handleRemoveClick(follower.id, follower.username)}}>Remove</button>}
                                    {sessionUser.id !== +userId && (suserFollowing.length === 0 || suserFollowing.indexOf(follower.id) === -1) && sessionUser.id !== follower.id && <button className="follows-modal-follow-button" onClick={() => { handleFollowClick(follower.id)}}>Follow</button>}
                                    {sessionUser.id !== +userId && (suserFollowing.indexOf(follower.id) >= 0) && sessionUser.id !== follower.id && <button className="follows-modal-following-button" onClick={() => { handleUnfollowClick(follower.id, follower.username) }}>Following</button>}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default DisplayFollowers;
