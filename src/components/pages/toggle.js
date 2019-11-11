import React, { Component } from "react";

export default class Toggle extends Component {
  constructor() {
    super();

    this.state = {
      active: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(function(prevState) {
      return { isToggleOn: !prevState.isToggleOn };
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
      </div>
    );
  }
}
