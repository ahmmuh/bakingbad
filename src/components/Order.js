import React from "react";

function Order() {
  return (
    <div className="container">
      <h2 style={{ textAlign: "center" }}>Du beställer följande produkt(er)</h2>
      <h3>Produktnamn</h3>
      <p>beskrivning</p>
      <img src="" alt="Produkt bild" />
      <form id="form">
        <div className="form-group">
          <label htmlFor="name">Namn:</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Adress:</label>
          <input type="text" id="text" name="text" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-post:</label>
          <input type="Emil" id="email" name="email" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="number">Tel:</label>
          <input
            type="number"
            id="number"
            name="number"
            className="form-control"
          />
        </div>
        <div id="sendbtnContainer" style={sendbtnContainer}>
          <input
            style={btn}
            type="submit"
            className="btn btn-success"
            value="Beställ nu"
          />
        </div>
      </form>
    </div>
  );
}

const sendbtnContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};
const btn = {
  width: "40%",
  float: "right"
};
export default Order;
