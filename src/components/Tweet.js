import './Tweet.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react'


 class Tweet extends Component {

  state = {
    isFocus: false
  }

  handleFocus = ({type}) => {
    this.setState({ isFocus: type === 'mouseenter'})
  }
  render() {
    const { avatar, tweet, username, remove, index } = this.props
    const {isFocus} = this.state
    return (
      <div className="tweet">
    <div className="avatar">
      <img src={avatar} alt='image' />
    </div>
    <div className="data">
      <strong>{username}</strong>
    </div>
    <div className="content">
      <p>{tweet}</p>
    </div>
    {username === 'Roro-senseï' && (
      <FontAwesomeIcon 
      icon={faTrash}
      onMouseEnter={this.handleFocus}
      onMouseLeave={this.handleFocus}
      onClick={() => remove(index)} 
      />
    )}
  </div>
    )
  }
}


export default Tweet;
