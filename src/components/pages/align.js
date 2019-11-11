import React, { Component } from "react";

export default class Align extends Component {
  constructor() {
    super();

    this.state = {
      align: ""
    };
  }

  handleAlign(alignment) {
    this.setState({
      align: alignment
    });
  }

  render() {
    return (
      <div>
        <h2 style={{ textAlign: this.state.align }}>Align</h2>
        <button onClick={() => this.handleAlign("left")}>Left</button>
        <button onClick={() => this.handleAlign("center")}>Center</button>
        <button onClick={() => this.handleAlign("right")}>Right</button>
      </div>
    );
  }
}