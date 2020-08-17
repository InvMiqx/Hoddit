import React, {useState, useEffect } from 'react';

const MainArea = () => {

  const [height, setHeight] = useState(0);
  const [displayArrow, setDisplayArrow] = useState("1");

  useEffect(()=>{
    window.addEventListener("scroll", () => setHeight(window.pageYOffset));
  }, []);

  useEffect(()=>{
    if(height<300){
      setDisplayArrow("1");
    }
    else{
      setDisplayArrow("0");
    }
  }, [height]);

  return (
    <div className="mainTextArea">
      <h3>Hoddit</h3>
      <h4>The fastest growing reddit posts, right now</h4>
      <div className="arrow" style={{opacity:displayArrow}}></div>
    </div>
  );
};

export default MainArea;
