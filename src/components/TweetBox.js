import React, { Component } from 'react'

export default class TweetBox extends Component {
  state = {
    value: ''
  }
handleChange = ({target: { value } }) => {
  this.setState({value});
}

  render() {
    const {value} = this.state;
    return (
      <div>
        <textarea
        rows={3}
        placeholder="composer votre tweet"
        value={value}
        onChange={this.handleChange}
        />
      </div>
    )
  }
}
