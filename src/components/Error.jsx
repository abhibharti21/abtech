import React from "react";
import "../style/Error.scss";
import sorry from "../assets/sorry.png";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <img src={sorry} alt="" />
      <h2>404 Page Not Found.</h2>
      <Link to={"/#home"}>Go To Home Page</Link>
    </div>
  );
};

export default Error;
