import React, { useState } from 'react';
import { Modal } from '../../context/modal'
import UploadForm from './UploadForm';
import '../UploadModal/UploadModal.css'
import add from './images/add.png';

function UploadModal() {
  const [ showModal, setShowModal] = useState(false);

return (
  <>
    <img className="navIcon"
    src={add}
    onClick={() => setShowModal(true)}
    alt=""
    ></img>
    {showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <UploadForm hideForm={() => setShowModal(false)/>
      </Modal>
    )}
  </>
);
}

export default UploadModal;
