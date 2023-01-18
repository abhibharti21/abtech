import React from "react";
import "../style/Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact us :-</h1>
        <form>
          <input
            type="text"
            id="name"
            required
            placeholder="Enter your name..."
          />

          <input
            type="email"
            id="email"
            required
            placeholder="Enter your Email..."
          />

          <textarea
            id="message"
            required
            placeholder="Enter your message"
          ></textarea>

          <button type="submit">Reach Us</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
