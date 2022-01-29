import React from "react";

export default function ChartCard(props) {
  return (
    <div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <i>{props.icon}</i>
            {props.title}
          </div>
          <div className="card-body">
            <div className="chart"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
