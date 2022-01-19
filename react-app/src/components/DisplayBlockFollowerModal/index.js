// import React, { useState } from 'react';
import { Modal } from '../../context/modal'
import DisplayBlockFollower from './DisplayBlockFollower';

function DisplayBlockFollowerModal({ userId, sessionUserId, blockFollowerId, setBlockFollowerId, blockFollowerName, setBlockFollowerName, setShowBlockFollowerModal, setUser }) {
    // const [showModal, setShowModal] = useState(false);

    return (
        <>
            {/* HTML ELEMENT
            <button onClick={() => setShowModal(true)}>Show Post</button> */}
            <Modal onClose={(e) => {
                setShowBlockFollowerModal(false);
            }}>
                <DisplayBlockFollower userId={userId} sessionUserId={sessionUserId} blockFollowerId={blockFollowerId} setBlockFollowerId={setBlockFollowerId} blockFollowerName={blockFollowerName} setBlockFollowerName={setBlockFollowerName} setShowBlockFollowerModal={setShowBlockFollowerModal} setUser={setUser} />
            </Modal>
        </>
    );
}

export default DisplayBlockFollowerModal;