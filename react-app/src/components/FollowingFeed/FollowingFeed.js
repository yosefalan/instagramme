import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef  } from 'react';
import { useHistory } from "react-router-dom";
import { getFollowing, resetFollowing } from "../../store/following";
import './FollowingFeed.css'


function FollowingFeed () {
  const dispatch = useDispatch();
  const history = useHistory();
  const ref = useRef(null);
  const sessionUser = useSelector((state) => state.session.user);
  const following = useSelector(state => state.following);
  const userId = sessionUser.id

  useEffect(() => {
    dispatch(getFollowing(userId));
  }, [dispatch, userId]);

  const handleClick = (followeeId) => {
    dispatch(resetFollowing());
    history.push(`/users/${followeeId}`);
  }

  // const scroll = (offset) => {
  //   ref.current.scrollLeft += offset
  // }



    return (
      <div className="following-feed-container">
        <div className="following-feed-inner-container" ref={ref}>
          <div className="following-feed-inner-container-2">
            <div className="following-feed-bumper"></div>
            {following?.map((followee) => {
              return (
                <div className="following-feed-tile" key={followee.id}>
                  <div className="following-feed-pic-container"><img className="following-feed-profile-pic" src={followee.profile_image} alt="" onClick={() => { handleClick(followee.id) }}></img>
                      </div>
                      <div className="following-feed-username">
                    <div className="following-feed-username-link" onClick={() => { handleClick(followee.id) }}><span className="followee-username-span">{followee.username}</span>
                        </div>
                    </div>
                  </div>
              )
            })}
            <div className="following-feed-bumper"></div>
          </div>
        </div>
          {/* <div className="chevron_left">
            <img
              onClick={() => scroll(-100)}
              id="chev_l"
            src="/images/chevron_left.png"></img>
          </div>
          <div className="chevron_right">
          <img
          onClick={() => scroll(100)}
            id="chev_r"
          src="/images/chevron_right.png"></img>
          </div> */}
      </div>
    )
 }

 export default FollowingFeed
