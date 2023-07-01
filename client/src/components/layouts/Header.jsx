import React from "react";
import { Link } from "react-router-dom";
import "./css/header.css";

const Header = () => {
  return (
    <header id="header">
      <nav className="navbar navbar-expand-lg shadow">
        <div className="container">
          <Link className="navbar-brand" to={'/'} >
            OLMA
          </Link>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to={'/'} >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/about"}>
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to={"/contact"}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
      </nav>
    </header>
  );
};

export default Header;
