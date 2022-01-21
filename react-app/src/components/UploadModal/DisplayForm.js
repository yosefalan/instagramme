import React, { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { createPost } from "../../store/posts";
import { useDispatch, useSelector } from "react-redux";
import './UploadModal.css'
import logo from './images/instagramme_logo_black.png'
// import { Editor } from "@tinymce/tinymce-react";

function DisplayForm({ preview, file, hideForm }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const user_id = sessionUser.id
    const user = sessionUser
    const history = useHistory();
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");
    const [errors, setErrors] = useState([]);


    const handleSubmit = (e) => {
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
            <div className="upload-form-main-display">
                <form
                    onSubmit={handleSubmit}
                    className="displayForm">
                    <div className="upload-form-top-display"><p>Create new post</p></div>
                    <div className="upload-form-bottom">
                        <div className="upload-form-bottom-left">
                            <div className="image-div">
                                <img className="previewImage" src={preview} alt=""></img>
                            </div>
                        </div>
                        <div className="upload-form-bottom-right">
                            <div className="user_info">
                                <div id="user_img_container">
                                    <img id="user_img" src={user.profile_image} />
                                </div>
                                <div id="user_name">
                                    <p>{user.username}</p>
                                </div>
                            </div>
                            <div className="displayFormContainer">

                                <textarea
                                    id="upload_display_textarea"
                                    className="displayTextArea"
                                    placeholder="Write a caption..."
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                                {/* <Editor
                         id="upload_display_textarea"
                         className="displayTextArea"
                         placeholder="Write a caption..."
                         value={description}
                         onChange={(e) => setDescription(e.target.value)}
                        apiKey='hv4ll8jpjbvukr6o0erxzrdlexo8u9au4c4glqpjn81gyaxk'
                        init={{
                            placeholder: "Write a caption...",
                            plugins: "emoticons",
                            toolbar: "emoticons",
                            toolbar_location: "bottom",
                            menubar: false,
                            statusbar: false,
                        }}
                        /> */}
                            </div>
                        </div>
                    </div>
                    <div className="submitBtnContainer"><button
                        type="submit"
                        className="submitFormBtn">
                        Share</button></div>
                </form>
            </div>
        </>
    )



}

export default DisplayForm
