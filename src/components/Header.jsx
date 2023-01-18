import React from "react";
import { Link } from "react-router-dom";
import "../style/Header.scss";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <nav className="top">
      <h1>Abhi tech</h1>
      <main>
        <HashLink to={"/#Home"}>Home</HashLink>
        <Link to={"/contact"}>Contact</Link>
        <HashLink to={"/#About"}>About</HashLink>
        <HashLink to={"/#Brands"}>Brands</HashLink>
        <Link to={"/Services"}>Services</Link>
      </main>
    </nav>
  );
};

export default Header;
