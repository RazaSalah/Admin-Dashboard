import React from "react";

export default function ReportCard(props) {
  return (
    <div className="col-md-3 mb-3">
      <div className="card text-white bg-pink mb-3 h-100">
        <div className="card-body text-center">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.price} SAR</p>
        </div>
        <div className="card-footer bg-transparent border-white">
          <a href="#" className="card-link link-light">
            View Details
          </a>
          <i className="fas fa-chevron-right float-end" />
        </div>
      </div>
    </div>
  );
}
