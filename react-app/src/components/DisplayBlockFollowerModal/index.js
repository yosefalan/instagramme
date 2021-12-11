// import React, { useState } from 'react';
import { Modal } from '../../context/modal'
import DisplayBlockFollower from './DisplayBlockFollower';

function DisplayBlockFollowerModal({ userId, blockFollowerId, setBlockFollowerId, blockFollowerName, setBlockFollowerName, setShowBlockFollowerModal }) {
    // const [showModal, setShowModal] = useState(false);

    return (
        <>
            {/* HTML ELEMENT
            <button onClick={() => setShowModal(true)}>Show Post</button> */}
            <Modal onClose={(e) => {
                setShowBlockFollowerModal(false);
            }}>
                <DisplayBlockFollower userId={userId} blockFollowerId={blockFollowerId} setBlockFollowerId={setBlockFollowerId} blockFollowerName={blockFollowerName} setBlockFollowerName={setBlockFollowerName} setShowBlockFollowerModal={setShowBlockFollowerModal} />
            </Modal>
        </>
    );
}

export default DisplayBlockFollowerModal;