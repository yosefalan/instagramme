import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserPosts } from '../store/posts';

function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();
  const dispatch = useDispatch();
  const posts = useSelector((state) => Object.values(state.posts));

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  useEffect(() => {
    dispatch(getUserPosts(userId));
  }, [dispatch, userId])

  if (!user) {
    return null;
  }

  return (
    <>
      <div>
        <img src={user.profile_image} alt=""></img>
      </div>
      <div>
        { user.username }
      </div>
      <div>
        <div>
          {posts?.length || 0} {posts.length == 1 ? "Post" : "Posts"}
        </div>
        <div>
          {user.followers?.length || 0} {user.followers == 1 ? "Follower" : "Followers"}
        </div>
        <div>
          {user.following?.length || 0} Following
        </div>
        <div>
          {posts?.map(post => {
            return(
              <div key={post.id}>
                <img src={post.photos} alt=""></img>
              </div>
            )
          })}
        </div>
      </div>
    </>

    // <ul>
    //   <li>
    //     <strong>User Id</strong> {userId}
    //   </li>
    //   <li>
    //     <strong>Username</strong> {user.username}
    //   </li>
    //   <li>
    //     <strong>Email</strong> {user.email}
    //   </li>
    // </ul>
  );
}
export default User;
