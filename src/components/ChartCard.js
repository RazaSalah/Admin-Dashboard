import React from "react";

export default function ChartCard(props) {
  return (
    
      <div className="col-6 mb-4">
        <div className="card">
          <div className="card-header">
            <h6>{props.title}</h6>
          </div>
          <div className="card-body">
            <div className="chart"></div>
          </div>
        </div>
      </div>
      
    
  );
}
