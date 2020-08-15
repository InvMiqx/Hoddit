import React, { useState, useEffect } from 'react';
import Postrow from './Postrow';

const RedditPosts = () => {
  const [data, setData] = useState("");
  const [postRank, setPostRank] = useState("");

  useEffect(async () =>{

    // let json = '[{"_id":"5f320d7d7a114b00298f5a82","ups":164786,"title":"My Grandfather and I in Tokyo, 73 years apart","created_utc":1597073084,"url":"http://www.reddit.com/r/pics/comments/i76v59/my_grandfather_and_i_in_tokyo_73_years_apart/","subreddit":"pics","rate":231.60907962238517,"flipper":false},{"_id":"5f320d7d7a114b00298f62de","ups":45049,"title":"Here comes the Hangover train","created_utc":1597103189,"url":"http://www.reddit.com/r/memes/comments/i7gn3m/here_comes_the_hangover_train/","subreddit":"memes","rate":214.79179910998093,"flipper":false},{"_id":"5f320d7d7a114b00298f62e3","ups":113134,"title":"Hes not wrong","created_utc":1597080723,"url":"http://www.reddit.com/r/memes/comments/i79c64/hes_not_wrong/","subreddit":"memes","rate":193.667332382311,"flipper":false},{"_id":"5f320d7d7a114b00298f59b2","ups":62973,"title":"Working hard vs working smart","created_utc":1597095579,"url":"http://www.reddit.com/r/funny/comments/i7eake/working_hard_vs_working_smart/","subreddit":"funny","rate":187.10409032385857,"flipper":false},{"_id":"5f320d7d7a114b00298f643c","ups":111648,"title":"A salt mine in Romania","created_utc":1597079631,"url":"http://www.reddit.com/r/interestingasfuck/comments/i78z6z/a_salt_mine_in_romania/","subreddit":"interestingasfuck","rate":185.34890155497757,"flipper":false},{"_id":"5f320d7d7a114b00298f5bdf","ups":77955,"title":"Admitted KKK leader who drove through crowd of protesters found guilty on multiple charges","created_utc":1597090302,"url":"http://www.reddit.com/r/news/comments/i7cjqr/admitted_kkk_leader_who_drove_through_crowd_of/","subreddit":"news","rate":183.63236622040753,"flipper":false},{"_id":"5f320d7d7a114b00298f5a17","ups":43013,"title":"As a 50 year old gamer who started with a Pong console in the 70s, I sometimes just have to stop and marvel at how far weve come.","created_utc":1597101127,"url":"http://www.reddit.com/r/gaming/comments/i7g1hz/as_a_50_year_old_gamer_who_started_with_a_pong/","subreddit":"gaming","rate":176.21056943875462,"flipper":false},{"_id":"5f320d7d7a114b00298f59b6","ups":102936,"title":"I build fake product ideas and today I made a cup holder that attaches to your shoes.","created_utc":1597080659,"url":"http://www.reddit.com/r/funny/comments/i79beq/i_build_fake_product_ideas_and_today_i_made_a_cup/","subreddit":"funny","rate":175.8888192743635,"flipper":false},{"_id":"5f320d7d7a114b00298f5c14","ups":89647,"title":"Most of the trash you see on the ground is unhealthy food packaging because people who don’t care about their own health don’t care about the Earth’s either.","created_utc":1597083171,"url":"http://www.reddit.com/r/Showerthoughts/comments/i7a5vn/most_of_the_trash_you_see_on_the_ground_is/","subreddit":"Showerthoughts","rate":164.9843567879271,"flipper":false},{"_id":"5f320d7d7a114b00298f6670","ups":101017,"title":"Jimmy was very sick yesterday","created_utc":1597077935,"url":"http://www.reddit.com/r/dankmemes/comments/i78ex3/jimmy_was_very_sick_yesterday/","subreddit":"dankmemes","rate":160.18341349965644,"flipper":false}]';
    // const result = JSON.parse(json);
    //
    // let rank = 0;
    // let redditData2 = result.map(function(post){
    //   rank++;
    //   return renderIndividualRow(post, rank)
    // });
    //
    // setData(redditData2);

    const result = await fetch("/api/query?limit=100");
    const result_json = await result.json();

    // let redditData = result_json.map(renderIndividualRow);
    // console.log(redditData);
    // setData(redditData);

    var rank = 0;
    let redditData2 = result_json.map(function(post){
      rank++;
      return renderIndividualRow(post, rank)
    });

    setData(redditData2);

  }, []);

  const renderIndividualRow = (post, rank) => {
    return <Postrow
      key={post.title}
      title={post.title}
      ups={post.ups}
      created_utc={post.created_utc}
      url={post.url}
      subreddit={post.subreddit}
      rate={post.rate}
      rank={rank}
    />
  }

  return (
    <div className="listing-item-holder">
      <div className="listing-header">
        <h2>posts</h2>
      </div>
      <div className="top-listing-item">
        <div className="rank-value">#</div>
        <div className="title">title</div>
        <div className="subreddit">subreddit</div>
        <div className="rate">ups/m</div>
      </div>
      {data}
    </div>
  );
};

export default RedditPosts;
