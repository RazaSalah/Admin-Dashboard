import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import ReportCard from "./components/ReportCard";
// import BarChart from "./components/BarChart";
import ChartCard from "./components/ChartCard";

import PersonIcon from "@material-ui/icons/Person";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import BorderClearIcon from "@material-ui/icons/BorderClear";
import StarIcon from "@material-ui/icons/Star";

export default class App extends Component {
  render() {
    //  obj
    const ReportCards = [
      { title: "sales", price: "3450.0" },
      { title: "Orders", price: "1890.0" },
      { title: "Visitors", price: "352" },
      { title: "Conversation Rate", price: "3.75%" },
    ];

    const Chart = [
      { icon: <BorderClearIcon />, title: "Orders" },
      { icon: <PersonIcon />, title: "Visitors" },
      { icon: <LocationCityIcon />, title: "Visitors City" },
      { icon: <StarIcon />, title: " Customers Rate" },
    ];

    //  retrieve the components
    return (
      <div>
        {/* navbar */}
        <Nav />
        <div className="d-flex" id="wrapper">
          {/* Sidebar */}
          <div className="bg-purple" id="sidebar-wrapper">
            <SideBar />
          </div>
          {/* /#sidebar-wrapper */}
          {/* Page Content */}
          <div id="page-content-wrapper">
            <div className="container-fluid px-4">
              <div className="col-12 fw-bold fs-3">Dashboard</div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item active" aria-current="page">
                    Dashboard
                  </li>
                </ol>
              </nav>
              {/* Reports Cards */}
              <div className="row">
                {ReportCards.map((ReportCards) => {
                  return (
                    <ReportCard
                      title={ReportCards.title}
                      price={ReportCards.price}
                    />
                  );
                })}
              </div>
              {/* Reports Chart */}

              {/* <div className="row mb-3">
                {Chart.map((Chart) => {
                  return (
                    <ChartCard
                      icon={Chart.icon}
                      title={Chart.title}
                    />
                  );
                })} */}
                {/* 
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <i className="fas fa-eye" />
                      Visitors
                    </div>
                    <div className="card-body">
                      <div className="chart">
                         <BarChart/> 
                      </div>
                    </div>
                  </div>
                </div>*/}
              {/* </div> */}
              {/* <div className="row mb-3">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <i className="fas fa-map-marker" />
                      Visitors City
                    </div>
                    <div className="card-body">
                      <div
                        className="chart"
                        style={{
                          width: "50%",
                          height: "100%",
                          margin: "0 auto",
                        }}
                      >
                        <canvas id="myPieChart" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <i className="fas fa-star" />
                      Customers Rate
                    </div>
                    <div className="card-body">
                      <div className="chart">
                        <canvas id="myLinearChart" />
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* Customers Table */}
              <div className="row mb-5">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <i className="fas fa-users" />
                      Customers
                    </div>
                    <div className="card-body">
                      <table
                        id="Customer"
                        className="table table-striped"
                        style={{ width: "100%" }}
                      >
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>Age</th>
                            <th>Last Visit</th>
                            <th>Orders</th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Customers Table */}
            <div id="footer" />
            <footer className="footer mt-auto py-3 bg-light">
              <div className="container-fluid">
                <span className="text-muted"> Copyright © nrt.sa 2021</span>
              </div>
            </footer>
          </div>
        </div>
        {/* /#page-content-wrapper */}
      </div>
    );
  }
}
