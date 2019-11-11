import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
    this.addCount = this.addCount.bind(this);
    this.subCount = this.subCount.bind(this);
  }

  addCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  subCount() {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div>
        <h1>Current Count {this.state.count}</h1>
        <button className="btn" onClick={this.addCount}>
          Add
        </button>
        <button className="btn" onClick={this.subCount}>
          Sub
        </button>
      </div>
    );
  }
}
