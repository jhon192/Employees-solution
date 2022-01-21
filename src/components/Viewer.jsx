import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Viewer = (prop) => {
  let d = new Date();
  const { id } = useParams();
  const { Employees, dept, putEmp, deleteJobs } = prop;
  const { isAuthenticated } = useAuth0();

  console.log(dept.id);

  return (
    <div>
      <div className="container-fluid d-flex justify-content-center">
        {Employees
        .filter(filt => filt.id == id && filt.deptoid == dept.id)
        .map(
          (value) => (
            <div className="card w-50 m-3">
              <h3 className="card-header text-center">
                {value.nombres + " " + value.apellidos}
              </h3>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div className="card-body w-100">
                    <p className="card-text">{value.description}</p>
                  </div>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>{value.location}</b>
                  </li>
                  <li className="list-group-item text-center">{value.sexo}</li>
                  <li className="list-group-item text-center">{value.cedula}</li>
                  <li className="list-group-item text-center">{value.direccion}</li>
                  <li className="list-group-item text-center">{value.salarioneto}</li>
                  <li className="list-group-item text-center">{value.salariobase}</li>
                </ul>
                <div className="card-body"></div>
                <div className="card-footer text-muted d-flex justify-content-between">
                  <div>{d.toDateString()}</div>
                  
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Viewer;
