import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const AddStudies = ({ postStudies, Dept }) => {
  return (
    <div className="">
      <Navbar />
      <div className="container m-5">
        <div>
          <form className="form-group" onSubmit={postStudies}>
            <div className="m-4 form-group">
              <h2>Añade nuevo estudio</h2>
            </div>

            <div className="m-5 form-group">
              <label className="col-sm-2 col-form-label me-2">
                Nombre del estudio
              </label>
              <input
                className="d-inline form-control w-50"
                type="text"
                placeholder="Nombre del estudio"
                name="NombreStudies"
                required
              />
            </div>
            <div className="m-5 form-group">
            <label className="col-sm-2 col-form-label">Tipo de empleo</label>
            <select className="d-inline form-select w-25" name="deptoid">
                {Dept.filter((x) => Object.keys(x).length !== 0).map((x) => (
                  <option value={x.id}>{x.DeptoName}</option>
                ))}
              </select>
            </div>
            <div className="m-4 form-group text-center">
              <input type="submit" className="btn btn-success" value="Crear" />
            </div>
          </form>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default AddStudies;
