import React from 'react';
import Header from './components/header';
import RedditPosts from './components/RedditPosts';
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <RedditPosts />
    </div>
  );
};

export default App;
