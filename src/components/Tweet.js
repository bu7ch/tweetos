import React from "react";

const Tweet = ({ avatar, tweet, username }) => (
  <div className="tweet">
    <div className="avatar">
      <img src={avatar} />
    </div>
    <div className="data">
      <strong>{username}</strong>
    </div>
    <div className="content">
      <p>{tweet}</p>
    </div>
  </div>
);

export default Tweet;
