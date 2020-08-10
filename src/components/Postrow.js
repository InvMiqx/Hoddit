import React from 'react';

const Postrow = (props) => {
  return (
    <div className="listing-item">
      <span class="rank-value">{props.rank}</span>
      <span class="title">{props.title}</span>
      <span class="subreddit">{props.subreddit}</span>
      <span class="rate">{props.rate}</span>
    </div>
  );
};

export default Postrow;
