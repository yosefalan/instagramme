// import React, { useEffect } from 'react';
// import { useSelector } from "react-router-dom";
import { useSelector } from 'react-redux';
// import { getOnePost } from "../../store/posts";
import './DisplayPost.css'

function DisplayPost() {
    const sessionUser = useSelector((state) => state.session.user);
    const posts = useSelector((state) => state.posts);
    console.log(sessionUser);
    console.log(posts);
    const post = posts["1"];
    console.log(post.comments);
    console.log(post.likes);
    
    return (
        <>
            <div id="post-modal-container">
                <div id="post-modal-image-container">
                    <div id="post-modal-image-wrapper">
                        <div id="inner-div">
                            <img src={post["photos"]} alt=""></img>
                        </div>
                        {/* <div id="inner-div-two">Hello from other inner div!</div> */}
                    </div>
                </div>
                <div id="post-modal-right-container">
                    <div id="top-right-container" className="right-column-div">
                        <div><div id="profile-pic-holder"><img id="profile-pic" src={post.profile_image} alt=""></img></div></div>
                        <div>{post.username}</div>
                        <div>
                            {post.user_id === sessionUser.id && <button>Delete Post</button>}
                        </div>
                    </div>
                    <div className="right-column-div">Hello from Comments</div>
                    <div className="right-column-div">Button Bar</div>
                    <div className="right-column-div">Like Count</div>
                    <div className="right-column-div-bottom">New Comment Form</div>
                </div>
            </div>
        </>
    )
}

export default DisplayPost