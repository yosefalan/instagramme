import React, { useState } from "react";
// import { signup, demoLogin } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { createPost } from "../../store/posts";
import  './UploadModal.css'
import media from './images/media.png'

function UploadForm() {
  const sessionUser = useSelector(state => state.session.user);
  const userId = sessionUser.id
  console.log("**********", userId)
  const form = new FormData()
  form.append('user_id', userId)
  // form.append('file', file)

  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  //   dispatch(signup({ username, email, password, image }))
  //     .then(() => {
  //       setUsername("");
  //       setEmail("");
  //       setPassword("");
  //       setImage(null);
  //     })
  //     .catch(async (res) => {
  //       const data = await res.json();
  //       if (data && data.errors) {
  //         newErrors = data.errors;
  //         setErrors(newErrors);
  //       }
  //     });
  // };

  // const updateFile = (e) => {
  //   const file = e.target.files[0];
  //   if (file) setImage(file);
  // };
  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  const handleFile = document.getElementById('getFile')


  return (
    <div className="uploadFormMain">
      <div className="upoadFormTop"><p>Create new post</p></div>
      <div className="uploadFormSpacer"></div>
      <div className="upoadFormBtm">
        <div className="mediaImgContainer"><img src={media} className="mediaImg"></img></div>
        <div className="uploadTextContainer"><p>Upload photos here</p></div>
        <form onSubmit={handleSubmit} className="form"></form>
        <div className="uploadBtnContainer">

        <button
        onclick={handleFile}
        className="uploadBtn">
        Select from computer</button>
        {/* <input
        type="file" onChange={updateFile}
        id="getFile"
        style="display:none"
        /> */}
        </div>
      </div>

    </div>
  );
}

export default UploadForm;
