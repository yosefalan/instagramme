// import React, { useState } from 'react';
import { Modal } from '../../context/modal'
import DisplayFollowing from './DisplayFollowing';
import './DisplayFollowing.css';

function DisplayFollowingModal({ userId, setShowFollowingModal, setUser}) {
    // const [showModal, setShowModal] = useState(false);

    return (
        <>
            {/* HTML ELEMENT
            <button onClick={() => setShowModal(true)}>Show Post</button> */}
            <Modal onClose={() => setShowFollowingModal(false)}>
                <DisplayFollowing userId={userId} setShowFollowingModal={setShowFollowingModal} setUser={setUser} />
            </Modal>
        </>
    );
}

export default DisplayFollowingModal;