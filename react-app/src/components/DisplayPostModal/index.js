import React, { useState } from 'react';
import { Modal } from '../../context/modal'
import DisplayPost from './DisplayPost';
import './DisplayPost.css'

function DisplayPostModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {/* HTML ELEMENT */}
            <button onClick={() => setShowModal(true)}>Show Post</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DisplayPost />
                </Modal>
            )}
        </>
    );
}

export default DisplayPostModal;