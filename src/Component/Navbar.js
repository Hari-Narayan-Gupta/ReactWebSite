import React from "react";
import { Link } from "react-router-dom";
// import { FirstName } from "./App";

export default function Navbar(props) {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              {/* <FirstName.Consumer>
                {(title) => { */}
                  <Link className="navbar-brand" to="/">
                  {props.title}
                </Link>
                 {/* }} 
               </FirstName.Consumer> */}
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/"
                    >
                      Home <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/service"
                    >
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/about"
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
