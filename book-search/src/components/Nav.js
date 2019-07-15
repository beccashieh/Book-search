import React from "react";

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
            <a className="nav-item nav-link active" href="./Search">
              Search <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="./Saved">
              Saved
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
