import React from "react";
import tweets from "../constants/tweets";
import Home from './Home'
import Tweet from "./Tweet"

import './App.css'
import TweetBox from "./TweetBox";

const App = () => (
  <>
  <TweetBox />
    <Home>
      {tweets.map((tweet, index) =>(
      <Tweet
        key={index}
        {...tweet}
      />
      ))}
    </Home>
  </>
);

export default App;
