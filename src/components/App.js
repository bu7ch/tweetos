import React from "react";
import { tweets } from "../constants/tweets";
import Home from './Home'
import Tweet from "./Tweet"

const App = () => (
  <>
    <Home>
      <Tweet
        id={tweet.id}
        avatar={tweet.avatar}
        username={tweet.username}
        tweet={tweet.tweet}
        date={tweet.date}
      />
    </Home>
  </>
);

export default App;
