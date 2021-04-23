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
        className={value.length > 240 && 'alert'}
        />
        <div className="action">
          <span className="count">{240 - value.length}</span>
          <button type="button" 
          disabled={!value.length || value.length > 240}
          > Tweet</button>
        </div>
      </div>
    )
  }
}
