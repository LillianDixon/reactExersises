import React, { Component } from "react";

export default class ShowHide extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: false
    };
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleHidden.bind(this)}>Press me</button>
        {!this.state.isHidden && <Child />}
      </div>
    );
  }
}

const Child = () => (
  <div className="modal">
    <h1>Hello World</h1>
  </div>
);