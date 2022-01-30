import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import ReportCard from "./components/ReportCard";
import Table from "./components/table";
import ChartCard from "./components/ChartCard";

export default class App extends Component {
  render() {
    //  obj
    const ReportCards = [
      { title: "sales", price: "3450.0" },
      { title: "Orders", price: "1890.0" },
      { title: "Visitors", price: "352" },
      { title: "Conversation Rate", price: "3.75%" },
    ];

    const chart = [
      { title: "Orders" },
      { title: "Visitors" },
      { title: "Visitors City" },
      { title: " Customers Rate" },
    ];

    const Sidebar = [];

    //  retrieve the components
    return (
      <div id="main-div">
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
              <div className="row">
                {chart.map((chart) => {
                  return <ChartCard title={chart.title} />;
                })}
              </div>

              {/* Customers Table */}
              <div className="row mt-3 mb-5">
                <Table />
              </div>
            </div>
            {/* Customers Table */}
            <div id="footer" />
            <footer className="footer my-auto py-3 bg-light ">
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
