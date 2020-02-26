import React from "react";

function Contact() {
  return (
    <div className="container">
      <h3 style={{textAlign: 'center'}}>Contact us</h3>
      <form id="form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="number">Tel</label>
          <input
            type="number"
            id="number"
            name="number"
            placeholder="t.ex. 07xxxxxxxx"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Meddelande:</label>
          <textarea rows="5" className="form-control"></textarea>
          <input
            type="submit"
            className="btn btn-success"
            value="Skicka"
          />
        </div>
      </form>
    </div>
  );
}

export default Contact;
