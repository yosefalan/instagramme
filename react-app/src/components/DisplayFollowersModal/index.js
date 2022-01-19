// import React, { useState } from 'react';
import { Modal } from '../../context/modal'
import DisplayFollowers from './DisplayFollowers';
import './DisplayFollowers.css';

function DisplayFollowersModal({ userId, setShowFollowersModal, setUser }) {
    // const [showModal, setShowModal] = useState(false);

    return (
        <>
            {/* HTML ELEMENT
            <button onClick={() => setShowModal(true)}>Show Post</button> */}
            <Modal onClose={() => setShowFollowersModal(false)}>
                <DisplayFollowers userId={userId} setShowFollowersModal={setShowFollowersModal} setUser={setUser}/>
            </Modal>
        </>
    );
}

export default DisplayFollowersModal;