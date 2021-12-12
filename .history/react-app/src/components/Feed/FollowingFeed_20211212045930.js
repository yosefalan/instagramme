import './Feed.css'


function FollowingFeed () {


  const Post = ({
  id,
  user_id,
  description,
  username,
  likes,
  comments,
  photos,
  profile_image,
}) => {
    return (
      <div className="following-feed-container">
       <h1>Following Feed</h1>
      </div>
    )
 }

 export default FollowingFeed
