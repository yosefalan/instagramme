import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { createPost } from "../../store/posts";
import  './UploadModal.css'
import media from './images/media.png'
import { uploadFile } from 'react-s3';
import DisplayForm from "./DisplayForm";
const AWS = require("aws-sdk");
const multer = require("multer");

function UploadForm() {
  const sessionUser = useSelector(state => state.session.user);
  const user_id = sessionUser.id
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [errors, setErrors] = useState([]);
  const [preview, setPreview] = useState()

useEffect(() => {
  if (!file) {
      setPreview(undefined)
      return
  }
  const objectUrl = URL.createObjectURL(file)
    setPreview(objectUrl)
    return () => URL.revokeObjectURL(objectUrl)
  }, [file])

/************************************************************************************** */
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
};

const handleFile = (e) => {
  setFile(e.target.files[0]);
}

  if(file){
    return (
      <>
        <DisplayForm preview={file} />

      </>
    )
  }


  return(
    <div className="uploadFormMain">
      <div className="upoadFormTop"><p>Create new post</p></div>
      <div className="uploadFormSpacer">{file &&  <img src={preview} /> }</div>
      <div className="upoadFormBtm">
        <div className="mediaImgContainer"><img src={media} className="mediaImg"></img></div>
        <div className="uploadTextContainer"><p>Upload photos here</p></div>


        <div>
          <form
          className='formContainer'
          onSubmit={handleSubmit}
          className="form">
            {/* <div className="uploadBtnContainer"> */}
            <input
            type="file" onChange={handleFile}
            id="getFile"
            />

            {/* </div> */}

            {/* <textarea
            className="field"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            /> */}
            {/* <input
            type="text"
            className="field"
            placeholder="Image URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            /> */}
             {/* <button
            type="submit"
            className="uploadBtn">
            Submit</button> */}
          </form>
        </div>
      </div>

    </div>
  );
}

export default UploadForm;
