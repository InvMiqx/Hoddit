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
    />
  }

  const renderCustomRows = () => {
    let redditData = data.map(renderIndividualRow());
    return redditData;
  }

  return (
    <ul>
    <li>list</li>
      {renderCustomRows}
    </ul>
  );
};

export default RedditPosts;
