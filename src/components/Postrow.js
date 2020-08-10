import React from 'react';

const Postrow = (props) => {

  let rank = props.rank;
  let title = props.title.length > 70 ? props.title.substring(0, 70) + "..." : props.title;
  let subreddit = props.subreddit;
  let rate = props.rate;

  return (
    <div className="listing-item">
      <div class="rank-value">{rank}</div>
      <div class="title">{title}</div>
      <div class="subreddit">{subreddit}</div>
      <div class="rate">{(rate).toFixed(2)}</div>
    </div>
  );
};

export default Postrow;
