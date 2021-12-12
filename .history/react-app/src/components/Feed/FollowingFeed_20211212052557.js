import { useSelector, useDispatch } from "react-redux";


import './Feed.css'


function FollowingFeed () {
  const dispatch = useDispatch();
  const following = useSelector(state => state.following);

  const handleClick = (followeeId) => {
    dispatch(resetFollowing());
    dispatch(resetFollowers());
    setShowFollowingModal(false);
    history.push(`/users/${followeeId}`);
}
    return (

      <div className="following-feed-container">
       {following?.map((followee) => {
                        return (
                            <div className="follows-modal-list-row" key={followee.id}>
                                <div className="follows-modal-profile-pic-container"><img id="followed-profile-pic" src={followee.profile_image} alt=""></img></div>
                                <div className="follows-modal-username"><div className="follows-modal-username-link" onClick={() => { handleClick(followee.id) }}>{followee.username}</div></div>
                                <div className="follows-modal-list-button-container">
                                    {sessionUser.id === userId && <button className="follows-modal-remove-button" onClick={() => {handleUnfollowClick(followee.id, followee.username)}}>Following</button>}
                                    {sessionUser.id !== userId && (sessionUser.following.length === 0 || sessionUser.following.indexOf(followee.id) === -1) && sessionUser.id !== followee.id && <button className="follows-modal-follow-button" onClick={() => { handleFollowClick(userId, sessionUser.id, followee.id) }}>Follow</button>}
                                    {sessionUser.id !== userId && (sessionUser.following.indexOf(followee.id) >= 0) && sessionUser.id !== followee.id && <button className="follows-modal-following-button" onClick={() => { handleUnfollowClick(followee.id, followee.username) }}>Following</button>}
                                </div>
                            </div>
                            // <div key={followee.id}>{followee.username}</div>
                        )
                    })}
      </div>
    )
 }

 export default FollowingFeed
