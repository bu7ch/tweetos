
import React, { Component } from 'react';
import tweets from "../constants/tweets";
import Tweet from './Tweet';
import TweetBox from './TweetBox';

class Home extends Component {
  state = {
    tweets,
  };

  publish = (tweet) => {
    const { tweets } = this.state;
    this.setState({
      tweets: [
        {
          avatar: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80",
          username: "Roro-senseï",
          tweet: tweet,
        },
        ...tweets,
      ],
    });
  };

  remove =index => {
    const { tweets} = this. state;
    this.setState({ tweets: tweets.filter((tweet,i)=> i !== index)})
  }
  render() {
    const { tweets } = this.state;
    return (
      <div>
        <TweetBox publish={this.publish} />
        <div className="tweets">
        {tweets.map((tweet, index) => (
            <Tweet key={index}
            index={index}
            remove={this.remove}
            {...tweet} />
          ))}
        </div>
        
      </div>
    );
  }
}

export default Home;