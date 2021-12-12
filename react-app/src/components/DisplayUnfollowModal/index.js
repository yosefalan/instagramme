import React from 'react';
import { Modal } from '../../context/modal'
import DisplayUnfollow from './DisplayUnfollow';

function DisplayUnfollowModal({ userId, sessionUserId, unfollowId, setUnfollowId, unfollowName, setUnfollowName, setShowUnfollowModal }) {

    return (
        <>
            {/* HTML ELEMENT
            <button onClick={() => setShowModal(true)}>Show Post</button> */}
            <Modal onClose={(e) => {
                setShowUnfollowModal(false);
            }}>
                <DisplayUnfollow userId={userId} sessionUserId={sessionUserId} unfollowId={unfollowId} setUnfollowId={setUnfollowId} unfollowName={unfollowName} setUnfollowName={setUnfollowName} setShowUnfollowModal={setShowUnfollowModal} />
            </Modal>
        </>
    );
}

export default DisplayUnfollowModal;