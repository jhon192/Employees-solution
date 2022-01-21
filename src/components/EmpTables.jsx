import React from "react";
import { Link } from "react-router-dom";

const Jobs = ({ Employees, Dept, deleteEmp }) => {
  return (
    <div>
      <div className="mt-3">
        <div>
          <li className="btn btn-secondary me-2">
            <i className="fas fa-user-friends"></i> Empleados
          </li>
          <Link to="/AddEmp" className="btn btn-info me-2">
            <i className="fas fa-user-plus"></i> añadir nuevo empleado
          </Link>
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">cedula</th>
              <th scope="col">sexo</th>
              <th scope="col">direccion</th>
              <th scope="col">telefono de casa</th>
              <th scope="col">telefono movil</th>
              <th scope="col">salario base</th>
              <th scope="col">descuento</th>
              <th scope="col">salario neto</th>
              <th scope="col"></th>
            </tr>
          </thead>
          {Employees.filter((filt) => filt).map((x) => (
            <tbody>
              <tr className="table-info">
                <td>{x.nombres}</td>
                <td>{x.apellidos}</td>
                <td>{x.cedula}</td>
                <td>{x.sexo}</td>
                <td>{x.direccion}</td>
                <td>{x.telcasa}</td>
                <td>{x.telmobil}</td>
                <td>{x.salariobase}</td>
                <td>{x.descuento}</td>
                <td>{x.salarioneto}</td>
                <td>
                  <Link className="btn btn-warning" to={`/edit/${x.id}`}>
                    <i className="fas fa-user-edit"></i>
                  </Link>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={(e) => {
                    e.preventDefault()
                    deleteEmp(x.id, x)
                  }}>
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Jobs;
