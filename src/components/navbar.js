import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavigationComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="nav-wrapper">
        <div className="nav-link-wrapper">
          <NavLink exact to="/" activeClassName="nav-link-active">
            Home
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/align" activeClassName="nav-link-active">
            Align
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/changeColor" activeClassName="nav-link-active">
            Change Color
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/clock" activeClassName="nav-link-active">
            Clock
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/counter" activeClassName="nav-link-active">
            Counter
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/fontSizer" activeClassName="nav-link-active">
            Font Sizer
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/showHide" activeClassName="nav-link-active">
            Show Hide
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/toggle" activeClassName="nav-link-active">
            Toggle
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/timer" activeClassName="nav-link-active">
            Timer
          </NavLink>
        </div>

          <div className="nav-link-wrapper">
          <NavLink to="/toDoList" activeClassName="nav-link-active">
            To Do
          </NavLink>
        </div>
      </div>
    );
  }
}