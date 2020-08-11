import React from 'react';

const Postrow = (props) => {

  let rank = props.rank;
  let title = props.title.length > 80 ? props.title.substring(0, 80) + "..." : props.title;
  let subreddit = props.subreddit;
  let rate = props.rate;
  let url = props.url;

  return (
    <div className="listing-item">
      <div className="rank-value">{rank}</div>
      <a href={props.url} className="title" target="_blank">{title}</a>
      <a href={"https://www.reddit.com/r/" + subreddit} className="subreddit" target="_blank">{subreddit}</a>
      <div className="rate">{(rate).toFixed(2)}</div>
    </div>
  );
};

export default Postrow;
