import React, { useState } from 'react';
import { Modal } from '../../context/modal'
import DisplayPost from './DisplayPost';
import './DisplayPost.css'

function DisplayPostModal({postId, setShowModal}) {
    // const [showModal, setShowModal] = useState(false);

    return (
        <>
            {/* HTML ELEMENT
            <button onClick={() => setShowModal(true)}>Show Post</button> */}
                <Modal onClose={() => setShowModal(false)}>
                    <DisplayPost postId={postId} setShowModal={setShowModal}/>
                </Modal>
            )
        </>
    );
}

export default DisplayPostModal;
