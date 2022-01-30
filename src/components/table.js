import React from 'react';
import materialTable from 'material-table';

export default function Table() {
    return(
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
  
        )
}


