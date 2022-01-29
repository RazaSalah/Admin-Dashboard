import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-purple py-4 px-4 sticky-top">
          <div className="container-fluid">
            <div className="d-flex align-items-center ">
              <a href="#" className="navbar-brand">
                Nrt Solution
              </a>
              <i
                className="fas fa-align-left  fs-4  ms-lg-5 me-3"
                id="menu-toggle"
              />
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#Navbar"
              aria-controls="Navbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ border: "none" }}
            >
              <i className="fas fa-ellipsis-v text-light" />
            </button>
            <div className="collapse navbar-collapse" id="Navbar">
              <form className="d-flex ms-auto my-3 my-lg-0">
                <div className="input-group">
                  <input
                    className="form-control"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn bg-pink" type="submit">
                    <i className="fas fa-search" />
                  </button>
                </div>
              </form>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle "
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fas fa-user  me-2" />
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
