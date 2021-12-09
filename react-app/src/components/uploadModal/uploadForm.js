import React, { useState } from "react";
import { signup, demoLogin } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import  '../LoginFormModal/form.css'

function uploadForm() {
  return (
    <div>
      <h1>Upload Modal</h1>
    </div>
  );
}

export default uploadForm;
