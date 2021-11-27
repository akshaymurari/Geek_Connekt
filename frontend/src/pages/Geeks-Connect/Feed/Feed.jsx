import React from "react";
import pp from '../Profile/components/img/profile-pic.png';
import like from '../Profile/components/img/like-blue.png';
import comment from '../Profile/components/img/comments.png';
import share from '../Profile/components/img/share.png';
import feed from '../Profile/components/img/feed-image-1.png'
import "./Feed.scss";
import Comment from "../CommentBox/Comment";
const Feed = () => {
  return (
    <div className="feed-container">
      <Comment/>
    <div className="Feed ">
      <div className="post-container mb-5 card mx-auto shadow-sm">
        <div className="post-row">
          <div className="user-profile">
            <img src={pp} alt="" />
            <div>
              <p>Kranthi</p>
              <span>June 24 2021, 13:40pm</span>
            </div>
          </div>
          {/* <a href="#"></a> */}
        </div>

        <p className="post-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          suscipit dolorum a cupiditate illo reprehenderit non numquam velit
          nisi alias possimus sint natus, fugit soluta totam .
        </p>
        <img src={feed} alt="" className="post-img" />
        <div className="post-row">
          <div className="activity-icons">
            <div>
              <img src={like} alt="" />
              120
            </div>
            <div>
              <img src={comment} alt="" />
              120
            </div>
            <div>
              <img src={share} alt="" />
              120
            </div>
          </div>
          <div className="post-profile-icon">
            <img src={pp} alt="" />
          </div>
        </div>
      </div>
      <div className="post-container mb-5 card mx-auto shadow-sm">
        <div className="post-row">
          <div className="user-profile">
            <img src={pp} alt="" />
            <div>
              <p>Kranthi</p>
              <span>June 24 2021, 13:40pm</span>
            </div>
          </div>
          {/* <a href="#"></a> */}
        </div>

        <p className="post-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          suscipit dolorum a cupiditate illo reprehenderit non numquam velit
          nisi alias possimus sint natus, fugit soluta totam .
        </p>
        <img src={feed} alt="" className="post-img" />
        <div className="post-row">
          <div className="activity-icons">
            <div>
              <img src={like} alt="" />
              120
            </div>
            <div>
              <img src={comment} alt="" />
              120
            </div>
            <div>
              <img src={share} alt="" />
              120
            </div>
          </div>
          <div className="post-profile-icon">
            <img src={pp} alt="" />
          </div>
        </div>
      </div>
    </div>
    <div style={{height:"2.3rem"}}>

    </div>
    </div>
  );
};

export default Feed;
