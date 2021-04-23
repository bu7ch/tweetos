import React from "react";
import tweets from "../constants/tweets";
import Home from './Home'
import Tweet from "./Tweet"
import './App.css'

const App = () => (
  <>
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
