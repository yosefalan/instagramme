// import React, { useEffect } from 'react';
// import { useSelector } from "react-router-dom";
import { useSelector } from 'react-redux';
import './DisplayPost.css'
import logo 
function DisplayForm({ file }) {
    // const sessionUser = useSelector((state) => state.session.user);



    return (
        <>
            <div id="post-modal-container">
                <div id="post-modal-image-container">
                    <div id="post-modal-image-wrapper">
                        <div id="inner-div">
                            <img src={file} alt=""></img>
                        </div>
                        {/* <div id="inner-div-two">Hello from other inner div!</div> */}
                    </div>
                </div>
                <div id="post-modal-right-container">
                    <div id="top-right-container" className="right-column-div">
                        {/* <div><div id="profile-pic-holder"><img id="profile-pic" src={post.profile_image} alt=""></img></div></div> */}
                        {/* <div>{post.username}</div> */}
                        {/* <div>
                            {post.user_id === sessionUser.id && <button>Edit</button>}{" "}
                            {post.user_id === sessionUser.id && <button>Delete</button>}
                        </div> */}
                    </div>
                    <div className="right-column-div">Hello from Comments</div>
                    <div className="right-column-div">Button Bar</div>
                    {/* <div className="right-column-div">{post.likes} {post.likes === 1 ? "like" : "likes"}</div> */}
                    <div className="right-column-div">New Comment Form</div>
                </div>
            </div>
        </>
    )
}

export default DisplayForm
