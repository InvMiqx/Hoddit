import React, { useState, useEffect } from 'react';
import Postrow from './Postrow';

const RedditPosts = () => {
  const [data, setData] = useState("");

  useEffect(async () =>{
    // const result = await fetch("/api/query?limit=100");
    const result = await fetch("/testJSON");
    const result_json = await result.json();
    setData(result_json);
  }, []);

  const renderIndividualRow = (post) => {
    return <Postrow
      key={post.title}
      title={post.title}
      ups={post.ups}
      created_utc={post.created_utc}
      url={post.url}
      subreddit={post.subreddit}
      rate={post.rate}
    />
  }

  const renderCustomRows = () => {
    let redditData = data.map(renderIndividualRow());
    return redditData;
  }

  return (
    <ul>

      {renderCustomRows()}
    </ul>
  );
};

export default RedditPosts;
