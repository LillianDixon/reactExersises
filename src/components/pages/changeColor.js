import React, { Component } from "react";

export default class ColorChange extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      color: "Black"
    };
  }

  onChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      color: this.state.input,
      input: ""
    });
  };

  render() {
    return (
      <div>
        <h1 style={{ color: this.state.color }}>Color!</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Enter Color"
            value={this.state.input}
            onChange={this.onChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}