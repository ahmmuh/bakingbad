import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Products from "./components/Products";
import Map from "./components/Map";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Products />
        <Map />
        <Footer />
      </div>
    );
  }
}

export default App;
