import React, {useState, useEffect } from 'react';

const Postrow = (props) => {

  const [width, setWidth] = useState(window.innerWidth);
  const [titleLim, setTitleLim] = useState(0);
  const [subredditLim, setSubredditLim] = useState(0);

  useEffect(()=>{
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  // useEffect(()=>{
  //   console.log(width);
  // }, [width]);

  useEffect(()=>{
    // console.log(width);

    //titlelim changes
    if(width <=620){
      setTitleLim(33);
    }
    else if(width <=820){
      setTitleLim(60);
    }
    else if(width > 820){
      setTitleLim(80);
    }

    //subredditlim
    if(width<500){
      setSubredditLim(9);
    }
    else if(width < 620){
      setSubredditLim(15);
    }
    else if(width > 620){
      setSubredditLim(1000);
    }

  }, [width]);

  let rank = props.rank;
  let title = props.title;
  let titleDisplay = props.title.length > titleLim ? props.title.substring(0, titleLim) + ".." : props.title;
  let subreddit = props.subreddit;
  let subredditDisplay = props.subreddit.length > subredditLim ? props.subreddit.substring(0, subredditLim) + ".." : props.subreddit;
  let rate = props.rate;
  let url = props.url;

  return (
    <div className="listing-item">
      <div className="rank-value">{rank}</div>
      <a href={props.url} className="title" target="_blank">{titleDisplay}</a>
      <a href={"https://www.reddit.com/r/" + subreddit} className="subreddit" target="_blank">{subredditDisplay}</a>
      <div className="rate">{(rate).toFixed(2)}</div>
    </div>
  );
};

export default Postrow;
