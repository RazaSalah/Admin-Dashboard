import React, { Component } from "react";

export default class SideBar extends Component {
  render() {
    return (
      <div>
        {/* Sidebar */}
        <div className="list-group my-3">
          <a
            href="index.html"
            className="list-group-item  bg-transparent gray-text fw-bold"
          >
            <i className="fas fa-home" />
            Home
          </a>
          <a
            href="products.html"
            className="list-group-item  bg-transparent gray-text fw-bold"
          >
            <i className="fas fa-tshirt" />
            Products
          </a>
          <a
            href="orders.html"
            className="list-group-item  bg-transparent gray-text fw-bold"
          >
            <i className="fas fa-tshirt" />
            Orders
          </a>
          <div className="dropdown">
            <a
              href="report.html"
              className="list-group-item  bg-transparent gray-text fw-bold dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="collapse"
              data-bs-target="#reports-collapse"
              aria-expanded="false"
            >
              <i className="fas fa-chart-area" />
              Reports
            </a>
            <ul
              className="btn-toggle-nav list-unstyled fw-normal gray-text "
              aria-labelledby="dropdownMenuLink"
              id="reports-collapse"
            >
              <li>
                <a
                  className="dropdown-item gray-text bg-transparent"
                  href="report.html"
                >
                  weekly Report
                </a>
              </li>
              <li>
                <a className="dropdown-item gray-text bg-transparent" href="#">
                  Monthly Report
                </a>
              </li>
            </ul>
          </div>
          <a
            href="customers.html"
            className="list-group-item  bg-transparent  gray-text  fw-bold "
            aria-expanded="false"
          >
            <i className="fas fa-users" />
            Customers
          </a>
          <div className="sidebar-footer">
            Logged in as: <br /> nrt Admin{" "}
          </div>
        </div>
      </div>
    );
  }
}
