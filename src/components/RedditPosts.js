import React, { useState, useEffect } from 'react';
import Postrow from './Postrow';

const RedditPosts = () => {
  const [data, setData] = useState("");

  useEffect(async () =>{
    const result = await fetch("/api/query?limit=100");
    const result_json = await result.json();
    setData(result_json);

    // const result = JSON.stringify({"_id":"5f279f3d0ef27d001775bd74","ups":141670,"title":"Who knows why?","created_utc":1596391948,"url":"https://i.redd.it/8l82z1uarme51.png","subreddit":"memes","rate":211.2270761890562,"flipper":false});
    // setData(result);

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
    let b = JSON.parse(data);
    console.log(b);

    // let redditData = data.map(renderIndividualRow());
    // return redditData;
  }

  return (
    <ul>

      {renderCustomRows()}
    </ul>
  );
};

export default RedditPosts;
