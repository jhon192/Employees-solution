import React from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Edit = (prop) => {
  const { id } = useParams();

  const { Employees, Dept, putEmp } = prop;

  return (
    <div className="">
    <Navbar />
    {
      Employees.filter((filt) => id == filt.id).map(value => (
        <div className="container m-5">
        <div>
          <form className="form-group" onSubmit={(e) => {
            e.preventDefault()
            putEmp(e, value.id)
          }}>
            <div className="m-4 form-group">
              <h2>Editar empleado</h2>
            </div>
  
            <div className="m-4 form-group">
              <label className="col-sm-2 col-form-label">Nombre</label>
              <input
                className="d-inline form-control w-50"
                type="text"
                placeholder={`Actual nombre: ${value.nombres}`}
                name="Nombre"
                required
              />
            </div>
            <div className="m-4 form-group">
              <label className="col-sm-2 col-form-label">Apellido</label>
              <input
                className="d-inline form-control w-50"
                type="text"
                accept="image/png, image/jpeg"
                placeholder={`Actual apellidos: ${value.apellidos}`}
                name="Apellido"
              />
            </div>
            <div className="form-check">
              <label className="col-sm-2 col-form-label">Sexo</label>
              <input type="radio" name="Sexo" value="M" />
              <label className="d-inline form-label m-3">Hombre</label>
              <input type="radio" name="Sexo" value="F" />
              <label className="d-inline form-label m-3">Mujer</label>
              <input type="radio" name="Sexo" value="NB" />
              <label className="d-inline form-label m-3">No binario</label>
            </div>
            <div className="m-4 form-group">
              <label className="col-sm-2 col-form-label">Cedula</label>
              <input
                className="d-inline form-control w-50"
                type="text"
                placeholder={`Actual cedula: ${value.cedula}`}
                name="Cedula"
              />
            </div>
  
            <div className="m-4 form-group">
              <label className="col-sm-2 col-form-label">Direccion</label>
              <input
                className="d-inline form-control w-50"
                type="text"
                placeholder={`Actual direccion: ${value.direccion}`}
                name="Direccion"
                required
              />
            </div>
            <div className="m-4 form-group">
              <label className="col-sm-2 col-form-label">Telefono casa</label>
              <input
                className="d-inline form-control w-50"
                type="text"
                placeholder={`Actual telefono casa: ${value.telcasa}`}
                name="telefonoCasa"
              />
            </div>
            <div className="m-4 form-group">
              <label className="col-sm-2 col-form-label">Telefono movil</label>
              <input
                className="d-inline form-control w-50"
                type="text"
                placeholder={`Actual telefono movil: ${value.telmobil}`}
                name="telefonoMovil"
              />
            </div>
            <div class="m-4 form-group">
              <label className="col-sm-2 col-form-label">Tipo de empleo</label>
              <select className="d-inline form-select w-25" name="deptoid">
                {Dept.filter((x) => Object.keys(x).length !== 0).map((x) => (
                  <option value={x.id}>{x.DeptoName}</option>
                ))}
              </select>
            </div>
            <div className="m-4 form-group">
              <label className="col-sm-2 col-form-label">Salario base</label>
              <input
                className="d-inline form-control w-50"
                type="text"
                placeholder={`Actual salario base: ${value.salariobase}`}
                name="salarioBase"
              />
            </div>
            <div className="m-4 form-group">
              <label className="col-sm-2 col-form-label">Descuento</label>
              <input
                className="d-inline form-control w-50"
                type="text"
                placeholder={`Actual descuento: ${value.descuento}`}
                name="descuento"
              />
            </div>
            <div className="m-4 form-group">
              <label className="col-sm-2 col-form-label">Salario neto</label>
              <input
                className="d-inline form-control w-50"
                type="text"
                placeholder={`Actual salario neto: ${value.salarioneto}`}
                name="salarioNeto"
              />
            </div>
            <div className="m-4 d-flex justify-content-center">
              <input
                className="btn btn-primary w-25"
                type="submit"
                value="Editar"
                required
              />
            </div>
          </form>
        </div>
      </div>
      ))
    }
    <Footer />
  </div>
  );
};

export default Edit;
