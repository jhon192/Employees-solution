import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Operator = ({ Employees, Dept }) => {
  return (
    <div>
      <Navbar />
      {Dept.map((x) => (
        <div className="container-fluid">
          <div className="mt-3">
            <div>
              <li className="btn btn-secondary me-2">
                <i className="fas fa-user-friends"></i> {x.DeptoName}
              </li>
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
              {Employees.filter((filt) => filt.deptoid === x.id).map((x) => (
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
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default Operator;
