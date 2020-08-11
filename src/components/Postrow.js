import React from 'react';

const Postrow = (props) => {

  let rank = props.rank;
  let title = props.title.length > 80 ? props.title.substring(0, 80) + "..." : props.title;
  let subreddit = props.subreddit;
  let rate = props.rate;
  let url = props.url;

  return (
    <div className="listing-item">
      <div class="rank-value">{rank}</div>
      <div class="title"><a href={props.url}>{url}</a></div>
      <div class="subreddit">{subreddit}</div>
      <div class="rate">{(rate).toFixed(2)}</div>
    </div>
  );
};

export default Postrow;
