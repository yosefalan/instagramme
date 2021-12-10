import React, { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { createPost } from "../../store/posts";
import { useDispatch, useSelector } from "react-redux";
import './UploadModal.css'
import logo from './images/instagramme_logo_black.png'

function DisplayForm({ preview, file, hideForm }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const user_id = sessionUser.id
    const history = useHistory();
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        console.log("HANDLE SUBMIT!!!!!")
        e.preventDefault();
        let newErrors = [];
        dispatch(createPost({ user_id, description, file }))
          .then(() => {
            setDescription("");
            setUrl("");
          })
          .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) {
              newErrors = data.errors;
              setErrors(newErrors);
            }
          });
        hideForm();
        history.push('/')
      };


    return (
        <>
            <div id="post-modal-container">
                <div id="post-modal-image-container">
                    <div id="post-modal-image-wrapper">
                        <div className="image-div">
                            <img className="previewImage" src={preview} alt=""></img>
                        </div>
                        {/* <div id="inner-div-two">Hello from other inner div!</div> */}
                    </div>
                </div>
                <div id="post-modal-right-container">
                    <div className="displayFormContainer">
                        <form
                        onSubmit={handleSubmit}
                        className="displayForm">
                            <div className="textAreaContainer"><textarea
                            className="displayTextArea"
                            placeholder="Add a description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            /></div>
                            <div className="submitBtnContainer"><button
                            type="submit"
                            className="submitFormBtn">
                            Submit</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DisplayForm
