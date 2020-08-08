import React, { useState, useEffect } from 'react';
import Postrow from './Postrow';

const RedditPosts = () => {
  const [data, setData] = useState("");

  useEffect(async () =>{

    // let json = '[{"_id":"5f279f3d0ef27d001775bd74","ups":141670,"title":"Who knows why?","created_utc":1596391948,"url":"https://i.redd.it/8l82z1uarme51.png","subreddit":"memes","rate":211.2270761890562,"flipper":false},{"_id":"5f279f3d0ef27d001775c0fa","ups":156527,"title":"Fuck Nepotism","created_utc":1596381721,"url":"https://i.imgur.com/JEu4eZS.gifv","subreddit":"dankmemes","rate":186.08690483266957,"flipper":false},{"_id":"5f279f3d0ef27d001775bd61","ups":80337,"title":"Left guy: We failed. Right guy: I know.","created_utc":1596405775,"url":"https://i.redd.it/ivnazf1hwne51.jpg","subreddit":"memes","rate":182.48040885860306,"flipper":false},{"_id":"5f279f3d0ef27d001775b507","ups":71134,"title":"Burning my suicide note because from now on I will work Things out","created_utc":1596408668,"url":"https://i.redd.it/kf1jai825oe51.jpg","subreddit":"pics","rate":181.44885638976277,"flipper":false},{"_id":"5f279f3d0ef27d001775b506","ups":99014,"title":"A collage of sunset pictures taken from my window during July","created_utc":1596399202,"url":"https://i.redd.it/aqgkgwxwcne51.jpg","subreddit":"pics","rate":180.09094216078574,"flipper":false},{"_id":"5f279f3d0ef27d001775bd92","ups":158917,"title":"please enjoy","created_utc":1596378130,"url":"https://i.redd.it/rgce12mplle51.jpg","subreddit":"memes","rate":176.37846836847947,"flipper":false},{"_id":"5f279f3d0ef27d001775bec5","ups":157675,"title":"Here are my removed &amp; genetically modified white blood cells, about to be put back in to hopefully cure my cancer! This is t-cell immunotherapy!","created_utc":1596373228,"url":"https://i.redd.it/g1gln8xo7le51.jpg","subreddit":"interestingasfuck","rate":160.4507988195787,"flipper":false},{"_id":"5f279f3d0ef27d001775b4cf","ups":81896,"title":"Oldest Golden Retriever is twice the age of its life expectancy and still going!","created_utc":1596401265,"url":"https://i.redd.it/8mfp67owine51.jpg","subreddit":"aww","rate":158.8928051738076,"flipper":false},{"_id":"5f279f3d0ef27d001775c6b6","ups":91168,"title":"That balance","created_utc":1596397696,"url":"https://v.redd.it/xazqmr9e8ne51","subreddit":"nextfuckinglevel","rate":158.58062271699427,"flipper":false},{"_id":"5f279f3d0ef27d001775c0ec","ups":50988,"title":"The answer was right there the whole time","created_utc":1596412404,"url":"https://i.redd.it/x1luo5i6goe51.png","subreddit":"dankmemes","rate":154.6184170625695,"flipper":false}]';
    // const result = JSON.parse(json);
    //
    // let redditData = result.map(renderIndividualRow);
    //
    // console.log(redditData);
    // setData(redditData);

    const result = await fetch("/api/query?limit=100");
    const result_json = await result.json();

    let redditData = result_json.map(renderIndividualRow);
    console.log(redditData);
    setData(redditData);

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
