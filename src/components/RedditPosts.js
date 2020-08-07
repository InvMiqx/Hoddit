import React, { useState, useEffect } from 'react';
import Postrow from './Postrow';

const RedditPosts = () => {
  const [data, setData] = useState({ hits: [] });

  useEffect(async () =>{

    const result = await fetch("/api/query?limit=100", {
      origin: "a",
      method: 'GET',
      headers: {'Content-Type':'application/json'},
     });

    // setData(result);
    // console.log(result);
    console.log(result);
  }, []);

  return (
    // <ul>
    //   {data.hits.map(item => (
    //     <li key={item.title}>
    //       {item.title}
    //     </li>
    //   ))}
    // </ul>

    <div></div>
  );
};

export default RedditPosts;
