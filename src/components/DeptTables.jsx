import React from "react";
import { Link } from "react-router-dom";

const DeptTables = ({ Dept, deleteDept }) => {
  return (
    <div>
      <div className="container-fluid">
        <div className="mt-3">
          <li className="btn btn-secondary me-2">
            <i className="fa fa-user"></i> Departamentos
          </li>
          <Link className="btn btn-info me-2" to="/addDept">
            <i className="fa fa-user-plus"></i> Anadir un nuevo departamento
          </Link>
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          {Dept.map((x) => (
            <tbody>
              <tr className="table-secondary">
                <td>{x.id}</td>
                <td>{x.DeptoName}</td>
                <td>
                  <Link className="btn btn-warning" to={`/editDept/${x.id}  `}>
                    <i className="fas fa-user-edit"></i>
                  </Link>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={(e) => {
                    deleteDept(x.id, x)
                  }}>
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
                <td></td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default DeptTables;
