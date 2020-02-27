import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top bg-light"
        id="navbar"
      >
        <a className="navbar-brand" href="#">
          Bakingbad
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Hem
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Produkter
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Kontakta oss
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/map">
                Karta
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;
