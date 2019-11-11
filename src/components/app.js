import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

// import your pages here
import Home from "./pages/home";
import Counter from "./pages/counter";
import Toggle from "./pages/toggle";
import FontSizer from "./pages/fontSizer";
import Align from "./pages/align";
import ShowHide from "./pages/showHide";
import Clock from "./pages/clock";
import ChangeColor from "./pages/changeColor";

import Navbar from "./navbar";


export default class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/counter" component={Counter} />
            <Route path="/toggle" component={Toggle} />
            <Route path="/fontSizer" component={FontSizer} />
            <Route path="/align" component={Align} />
            <Route path="/showHide" component={ShowHide} />
            <Route path="/clock" component={Clock} />
            <Route path="/changeColor" component={ChangeColor} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
