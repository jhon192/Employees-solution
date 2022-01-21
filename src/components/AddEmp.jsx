import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const AddEmp = (prop) => {
  const { AddEmpEmp, Dept } = prop;

  return (
    <div className="">
      <Navbar />
      <div className="container m-5">
        <div>
          <form className="form-group" onSubmit={AddEmpEmp}>
            <div className="m-4 form-group">
              <h2>Añade nuevo empleado</h2>
            </div>

            <div className="m-4 form-group">
              <label className="col-sm-2 col-form-label">Nombre</label>
              <input
                className="d-inline form-control w-50"
                type="text"
                placeholder="Nombre"
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
                placeholder="Apellido"
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
                placeholder="Cedula"
                name="Cedula"
              />
            </div>

            <div className="m-4 form-group">
              <label className="col-sm-2 col-form-label">Direccion</label>
              <input
                className="d-inline form-control w-50"
                type="text"
                placeholder="Direccion"
                name="Direccion"
                required
              />
            </div>
            <div className="m-4 form-group">
              <label className="col-sm-2 col-form-label">Telefono casa</label>
              <input
                className="d-inline form-control w-50"
                type="text"
                placeholder="Telefono Casa"
                name="telefonoCasa"
              />
            </div>
            <div className="m-4 form-group">
              <label className="col-sm-2 col-form-label">Telefono movil</label>
              <input
                className="d-inline form-control w-50"
                type="text"
                placeholder="Telefono Movil"
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
                placeholder="Salario Base"
                name="salarioBase"
              />
            </div>
            <div className="m-4 form-group">
              <label className="col-sm-2 col-form-label">Descuento</label>
              <input
                className="d-inline form-control w-50"
                type="text"
                placeholder="descuento"
                name="descuento"
              />
            </div>
            <div className="m-4 form-group">
              <label className="col-sm-2 col-form-label">Salario neto</label>
              <input
                className="d-inline form-control w-50"
                type="text"
                placeholder="Salario Neto"
                name="salarioNeto"
              />
            </div>
            <div className="m-4 d-flex justify-content-center">
              <input
                className="btn btn-primary w-25"
                type="submit"
                value="AddEmp"
                required
              />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddEmp;
