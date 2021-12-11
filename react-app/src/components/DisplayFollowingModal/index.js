import React, { useState } from 'react';
import { Modal } from '../../context/modal'
import DisplayFollowing from './DisplayFollowing';
import './DisplayFollowing.css';

function DisplayFollowingModal({ userId, setShowFollowingModal }) {
    // const [showModal, setShowModal] = useState(false);

    return (
        <>
            {/* HTML ELEMENT
            <button onClick={() => setShowModal(true)}>Show Post</button> */}
            <Modal onClose={() => setShowFollowingModal(false)}>
                <DisplayFollowing userId={userId} setShowFollowingModal={setShowFollowingModal} />
            </Modal>
        </>
    );
}

export default DisplayFollowingModal;