import React, { Component } from "react";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };

    this.checkStatus=this.checkStatus.bind(this)
  }

  checkStatus(){
    this.setState({
      done: !this.state.done
    })
  }

  render() {
    return (
      <div className="todo-item">
        <input
          onClick={this.checkStatus}
          type="checkbox"
        />
        <p className={this.state.done ? "done" : null}>{this.props.title}</p>
      </div>
    );
  }
}