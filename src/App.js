import React from 'react';
import Header from './components/header';
import RedditPosts from './components/RedditPosts';
import MainArea from './components/MainArea';
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <MainArea />
      <RedditPosts />
    </div>
  );
};

export default App;
