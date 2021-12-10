import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { createPost } from "../../store/posts";
import  './UploadModal.css'
import media from './images/media.png'
import { uploadFile } from 'react-s3';
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
          if (!selectedFile) {
              setPreview(undefined)
              return
          }


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


///ATTEMPT TO DIRECTLY UPLOAD FILE

// const s3 = new AWS.S3({ apiVersion: "2006-03-01" });


   // const storage = multer.memoryStorage({
  //   destination: function (req, file, callback) {
  //     callback(null, "");
  //   },
  // });

  // const singleMulterUpload = (nameOfKey) =>
  // multer({ storage: storage }).single(nameOfKey);

  // const passFile = (e, file=image) => {
  //   e.preventDefault();
  //   console.log("IMAGE IN PASS FUNCTION:", file)
  //   imageUpload(file)
  // }

  // const imageUpload = async (file) => {

  //   console.log("IMAGE UPLOAD FUNCTION BEING CALLED")
  //   console.log("FILE IN UPLOAD FUNCTION:", file)
  //   const { originalname, mimetype, buffer } = await file;
  //   const path = require("path");
  //   const Key = new Date().getTime().toString() + path.extname(originalname);
  //   const uploadParams = {
  //     Bucket: 'mamba-instagramme',
  //     Key,
  //     Body: buffer,
  //     ACL: "public-read",
  //   };
  //   const result = await s3.upload(uploadParams).promise();

  //   console.log("!!!!!!!!!!!!!!!", result.Location)
  //   return result.Location;
  // };

// const handleFile = document.getElementById('getFile')

  return (
    <div className="uploadFormMain">
      <div className="upoadFormTop"><p>Create new post</p></div>
      <div className="uploadFormSpacer"></div>
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

            <textarea
            className="field"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            />
            {/* <input
            type="text"
            className="field"
            placeholder="Image URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            /> */}
             <button
            type="submit"
            className="uploadBtn">
            Submit</button>
          </form>
        </div>
      </div>

    </div>
  );
}

// export default UploadForm;

// export const ImageUpload = () => {
//   const [selectedFile, setSelectedFile] = useState()
//   const [preview, setPreview] = useState()

//   // create a preview as a side effect, whenever selected file is changed
//   useEffect(() => {
//       if (!selectedFile) {
//           setPreview(undefined)
//           return
//       }

//       const objectUrl = URL.createObjectURL(selectedFile)
//       setPreview(objectUrl)

//       // free memory when ever this component is unmounted
//       return () => URL.revokeObjectURL(objectUrl)
//   }, [selectedFile])

//   const onSelectFile = e => {
//       if (!e.target.files || e.target.files.length === 0) {
//           setSelectedFile(undefined)
//           return
//       }

//       // I've kept this example simple by using the first image instead of multiple
//       setSelectedFile(e.target.files[0])
//   }

//   return (
//       <div>
//           <input type='file' onChange={onSelectFile} />
//           {selectedFile &&  <img src={preview} /> }
//       </div>
//   )
// }
