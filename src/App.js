import React, { Component } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Map from "./components/Map";
import Order from "./components/Order";
import Error from "./components/Error";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/contact" component={Contact} />
            <Route path="/map" component={Map} />
            <Route path="/order" component={Order} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
