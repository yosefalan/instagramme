import React from 'react'
import {getAllComments} from '../../store.Comment'
import {useSelector, useDispatch} from 'react-redux'
import {NavLink} from 'react-router-dom'
import '../Feed/post.css'


const Comment = ({post_id}) => {
    const comments = useSelector((state) => Object.values(state.comments));
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllComments(post_id));
      }, [dispatch]);
    return(
        <div className='commentContainer'>
            {comments?.reverse().map(({user_id, content, username}) => (
                <div className='commentBox'>
                <div className='username_link'>
                    <NavLink className='username_link' to={`/users/${user_id}`}>
                        {username}
                    </NavLink>
                </div>
                <div className='commentContent'>
                    {content}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Comment;
