import React from "react";
import "../style/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="left-con">
        <h1>Abhi Tech</h1>
        <p>&copy; All Copyrights Reserved</p>
      </div>
      <div className="right-con">
        <h5>Follow us</h5>
        <div>
          <a
            href="https://www.linkedin.com/in/abhishek-bharti-3322b1189/"
            target={"blank"}
          >
            Linkedin
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100041314941490"
            target={"blank"}
          >
            Facebook
          </a>
          <a href="https://github.com/abhibharti21" target={"blank"}>
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
