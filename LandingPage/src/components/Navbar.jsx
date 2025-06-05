import React from "react";
import todoLogo from "../assets/do-List-logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img src={todoLogo} alt="Todo-logo" className="img-fluid logo" />
        </a>

        {/* Hamburger Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="linkContainer">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
                About Us
              </a>
              <a className="nav-link" href="#">
                Features
              </a>
              <a className="nav-link" href="#">
                More Option
              </a>
              <a className="nav-link" href="#">
                Contact
              </a>
            </div>

            <div className="btn-container">
              <button className="btn btn-outline-danger" type="submit">
                Login
              </button>
              <button type="button" className="btn btn-danger">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
