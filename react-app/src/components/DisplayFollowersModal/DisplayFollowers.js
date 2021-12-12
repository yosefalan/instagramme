import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { getFollowers, resetFollowers } from "../../store/followers";
import { addFollowed, resetFollowing } from "../../store/following";
import DisplayBlockFollowerModal from '../DisplayBlockFollowerModal';
import DisplayUnfollowModal from '../DisplayUnfollowModal';
import "./DisplayFollowers.css";

// import { } from '../../store/followers'

function DisplayFollowers({userId, setShowFollowersModal}) {
    // const [isLoaded, setIsLoaded] = useState(false);
    const [showBlockFollowerModal, setShowBlockFollowerModal] = useState(false);
    const [blockFollowerId, setBlockFollowerId] = useState("");
    const [blockFollowerName, setBlockFollowerName] = useState("");
    const [showUnfollowModal, setShowUnfollowModal] = useState(false);
    const [unfollowId, setUnfollowId] = useState("");
    const [unfollowName, setUnfollowName] = useState("");
    const sessionUser = useSelector((state) => state.session.user);
    const followers = useSelector(state => state.followers);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getFollowers(userId));
    }, [dispatch, userId]);

    const handleClick = (followerId) => {
        dispatch(resetFollowers());
        dispatch(resetFollowing());
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

    const handleFollowClick = (userId, sessionUserId, followedId) => {
        dispatch(addFollowed(sessionUserId, followedId));
        dispatch(getFollowers(userId));
    }

    return (
        <>
            <div className="follows-modal-container">
                <div className='follows-modal-heading'>
                    <div className='follows-modal-heading-text'>Followers</div>
                    {showBlockFollowerModal && (
                        <DisplayBlockFollowerModal userId={userId} sessionUserId={sessionUser.id} blockFollowerId={blockFollowerId} setBlockFollowerId={setBlockFollowerId} blockFollowerName={blockFollowerName} setBlockFollowerName={setBlockFollowerName} setShowBlockFollowerModal={setShowBlockFollowerModal} />
                    )}
                    {showUnfollowModal && (
                        <DisplayUnfollowModal userId={userId} sessionUserId={sessionUser.id} unfollowId={unfollowId} setUnfollowId={setUnfollowId} unfollowName={unfollowName} setUnfollowName={setUnfollowName} setShowUnfollowModal={setShowUnfollowModal} />
                    )}
                </div>
                <div className="follows-modal-list">
                    {followers?.map((follower) => {
                        return (
                            <div className="follows-modal-list-row" key={follower.id}>
                                <div className="follows-modal-profile-pic-container"><img id="follower-profile-pic" src={follower.profile_image} alt=""></img></div>
                                <div className="follows-modal-username"><div className="follows-modal-username-link" onClick={() => {handleClick(follower.id)}}>{follower.username}</div></div>
                                <div className="follows-modal-list-button-container">
                                    {sessionUser.id == userId && <button className="follows-modal-remove-button" onClick={() => {handleRemoveClick(sessionUser.id, follower.username)}}>Remove</button>}
                                    {sessionUser.id != userId && (sessionUser.followers.length == 0 || sessionUser.followers.indexOf(follower.id) === -1) && sessionUser.id !== follower.id && <button className="follows-modal-follow-button" onClick={() => { handleFollowClick(userId, sessionUser.id, follower.id)}}>Follow</button>}
                                    {sessionUser.id != userId && (sessionUser.followers.indexOf(follower.id) >= 0) && sessionUser.id != follower.id && <button className="follows-modal-following-button" onClick={() => { handleUnfollowClick(follower.id, follower.username) }}>Following</button>}
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

// // import React, { useEffect } from 'react';
// // import { useSelector } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import "./DisplayPost.css";

// import { deletePost } from '../../store/posts'

// import Comment from "../Comments/CommentForm";



// function DisplayPost({ postId, setShowModal }) {
//     const sessionUser = useSelector((state) => state.session.user);
//     const posts = useSelector((state) => state.posts);
//     const post = posts[postId];
//     const dispatch = useDispatch()

//     const handleDelete = (id) => {
//         dispatch(deletePost(id));
//         setShowModal(false);
//     };

//     //   const handleEdit = (id) => {
//     //       dispatch(editPost(id));
//     //   }

//     return (
//         <>
//             <div id="post-modal-container">
//                 <div id="post-modal-image-container">
//                     <div id="post-modal-image-wrapper">
//                         <div id="inner-div">
//                             <img src={post["photos"]} alt=""></img>
//                         </div>
//                     </div>
//                 </div>
//                 <div id="post-modal-right-container">
//                     <div id="top-right-container" className="right-column-div">
//                         <div>
//                             <div id="profile-pic-holder">
//                                 <img id="profile-pic" src={post.profile_image} alt=""></img>
//                             </div>
//                         </div>
//                         <div>{post.username}</div>
//                         <div>
//                             {post.user_id === sessionUser.id && <button>Edit</button>}{" "}
//                             {post.user_id === sessionUser.id && <button onClick={() => handleDelete(postId)}>Delete</button>}
//                         </div>
//                     </div>

//                     <div className='right-column-div' contentEditable='false' >
//                         {post.description}
//                     </div>

//                     <div className="right-column-div">
//                         <Comment post_id={postId} />
//                     </div>
//                     <div className="right-column-div">Button Bar</div>
//                     <div className="right-column-div">
//                         {post.likes} {post.likes === 1 ? "like" : "likes"}
//                     </div>
//                     <div className="right-column-div">New Comment Form</div>
//                 </div>
//             </div>
//         </>
//     );
// }
