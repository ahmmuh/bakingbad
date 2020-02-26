import React, { Component } from "react";
import "./Products.css";
class Products extends Component {
  render() {
    return (
      <div class="container">
        <h1>Products</h1>
        <div class="row">
          <div class="col">
            <h3>Cake</h3>
            <p>lorem is free text genareted by unknow person</p>
            <img src="https://images.unsplash.com/photo-1519869325930-281384150729?ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80" />
            <span>259 kr</span>
            <button className="btn btn-secondary">Beställ</button>
          </div>
          <div class="col">
            <h3>Cake</h3>
            <p>lorem is free text genareted by unknow person</p>
            <img src="https://images.unsplash.com/photo-1519869325930-281384150729?ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80" />
            <span>299 kr</span>
            <button className="btn btn-secondary">Beställ</button>
          </div>
          <div class="col">
            {" "}
            <h3>Cake</h3>
            <p>lorem is free text genareted by unknow person</p>
            <img src="https://images.unsplash.com/photo-1519869325930-281384150729?ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80" />
            <span>199 kr</span>
            <button className="btn btn-secondary">Beställ</button>
          </div>
          <div class="col">
            {" "}
            <h3>Cake</h3>
            <p>lorem is free text genareted by unknow person</p>
            <img src="https://images.unsplash.com/photo-1519869325930-281384150729?ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80" />
            <span>99 kr</span>
            <button className="btn btn-secondary">Beställ</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
