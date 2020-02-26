import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Products from "./components/Products";
import Map from "./components/Map";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Error from "./components/Error";

// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      // <Router>
      <div className="App">
        <Navbar />
        <Header />
        <Products />
        <Contact />
        <Map />
        <Footer />
        {/* <Switch>
            <Route path="/" exact component={App} />
            <Route path="/products" component={Products} />
            <Route path="/contact" component={Contact} />
            <Route path="/error" component={Error} />
          </Switch> */}
      </div>
      // </Router>
    );
  }
}

export default App;
