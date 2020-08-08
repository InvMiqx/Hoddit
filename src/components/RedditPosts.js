import React, { useState, useEffect } from 'react';
import Postrow from './Postrow';

const RedditPosts = () => {
  const [data, setData] = useState("");

  useEffect(async () =>{

    const result = await fetch("/api/query?limit=100");
    const result_json = await result.json();

    setData(
      result_json.map(renderIndividualRow())
    );

    // const result = JSON.parse(JSON.stringify({"_id":"5f279f3d0ef27d001775bd74","ups":141670,"title":"Who knows why?","created_utc":1596391948,"url":"https://i.redd.it/8l82z1uarme51.png","subreddit":"memes","rate":211.2270761890562,"flipper":false},{"_id":"5f279f3d0ef27d001775c0fa","ups":156527,"title":"Fuck Nepotism","created_utc":1596381721,"url":"https://i.imgur.com/JEu4eZS.gifv","subreddit":"dankmemes","rate":186.08690483266957,"flipper":false}));
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

  const renderCustomRows = async () => {

    // const result = await fetch("/api/query?limit=100");
    // const result_json = await result.json();
    // setData(result_json);

    // console.log(result_json);

    // let postInfo;
    // let dataTemp = JSON.stringify(data);
    //
    // dataTemp.forEach(element=>{
    //   console.log("FUCK");
    //   postInfo+=renderIndividualRow(element);
    // });
    //
    // return postInfo;

    // let redditData = data.map(renderIndividualRow());
    // return redditData;
  }

  return (
    <ul>

      {data}
    </ul>
  );
};

export default RedditPosts;
