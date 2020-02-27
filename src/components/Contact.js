import React from "react";

function Contact() {
  return (
    <div className="container">
      <h3 style={{ textAlign: "center" }}>Contact us</h3>
      <form id="form">
        <div className="form-group">
          <label htmlFor="name">Namn:</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-post</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
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

        <div className="form-group">
          <label>Meddelande:</label>
          <textarea rows="5" className="form-control"></textarea>
          <input type="submit" className="btn btn-success" value="Skicka" />
        </div>
      </form>
    </div>
  );
}

export default Contact;
