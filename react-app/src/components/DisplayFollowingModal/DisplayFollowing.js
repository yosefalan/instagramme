import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getFollowing } from "../../store/following";
import "./DisplayFollowing.css";

// import { } from '../../store/followers'

function DisplayFollowing({ userId, setShowFollowingModal }) {
    const sessionUser = useSelector((state) => state.session.user);
    const following = useSelector(state => state.following);
    console.log(following);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getFollowing(userId))
    }, [dispatch, userId]);

    const handleClick = (followeeId) => {
        setShowFollowingModal(false);
        history.push(`/users/${followeeId}`);
    }

    return (
        <>
            <div className="follows-modal-container">
                <div className='follows-modal-heading'>
                    <div className='follows-modal-heading-text'>Following</div>
                </div>
                <div className="follows-modal-list">
                    {following?.map((followee) => {
                        return (
                            <div className="follows-modal-list-row" key={followee.id}>
                                <div className="follows-modal-profile-pic-container">Pic</div>
                                <div className="follows-modal-username"><div className="follows-modal-username-link" onClick={(e) => { handleClick(followee.id) }}>{followee.username}</div></div>
                                <div className="follows-modal-list-button-container">
                                    {sessionUser.id == userId && <button className="follows-modal-remove-button">Following</button>}
                                    {sessionUser.id != userId && (sessionUser.following.length === 0 || sessionUser.following.indexOf(followee.id) == -1) && sessionUser.id != followee.id && <button className="follows-modal-follow-button">Follow</button>}
                                    {sessionUser.id != userId && (sessionUser.following.indexOf(followee.id) >= 0) && sessionUser.id != followee.id && <button className="follows-modal-following-button">Following</button>}
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