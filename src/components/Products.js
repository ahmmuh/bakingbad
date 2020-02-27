import React, { Component } from "react";
import "./Products.css";
import { Link } from "react-router-dom";
class Products extends Component {
  render() {
    return (
      <div className="container">
        <h1>Products</h1>
        <div className="row">
          <div className="col">
            <h3>Cake</h3>
            <p>lorem is free text genareted by unknow person</p>
            <img src="https://images.unsplash.com/photo-1519869325930-281384150729?ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80" />
            <span>259 kr</span>
            <Link to="/order/" className="btn btn-secondary">
              Beställ
            </Link>
          </div>
          <div className="col">
            <h3>Cake</h3>
            <p>lorem is free text genareted by unknow person</p>
            <img src="https://images.unsplash.com/photo-1519869325930-281384150729?ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80" />
            <span>299 kr</span>
            <Link to="/order/" className="btn btn-secondary">
              Beställ
            </Link>
          </div>
          <div className="col">
            <h3>Cake</h3>
            <p>lorem is free text genareted by unknow person</p>
            <img src="https://images.unsplash.com/photo-1519869325930-281384150729?ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80" />
            <span>199 kr</span>
            <Link to="/order/" className="btn btn-secondary">
              Beställ
            </Link>
          </div>
          <div className="col">
            <h3>Cake</h3>
            <p>lorem is free text genareted by unknow person</p>
            <img src="https://images.unsplash.com/photo-1519869325930-281384150729?ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80" />
            <span>99 kr</span>
            <Link to="/order/" className="btn btn-secondary">
              Beställ
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
