import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand">Book Search</span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <Link to="/search" className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}></Link>
                Search
              </li>
              <li className="nav-item">
                <Link to="/saved" className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}></Link>
                Saved
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
