import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TweetBox extends Component {
  static propTypes = {
    publish: PropTypes.func.isRequired,
  };
  state = {
    value: "",
  };
  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = () => {
    const { value } = this.state;
    const { publish } = this.props;

    if (value.length && value.length <= 240) {
      publish(value);
      this.setState({ value: "" });
    }
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <textarea
          rows={3}
          placeholder="composer votre tweet"
          value={value}
          onChange={this.handleChange}
          className={value.length > 240}
        />
        <div className="action">
          <span className="count">{240 - value.length}</span>
          <button
            type="button"
            disabled={!value.length || value.length > 240}
            onClick={this.handleSubmit}>
            Tweet
          </button>
        </div>
      </div>
    );
  }
}
