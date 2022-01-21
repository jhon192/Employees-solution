import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const AddDept = ({ postDept }) => {
  return (
    <div className="">
      <Navbar />
      <div className="container m-5">
        <div>
          <form className="form-group" onSubmit={postDept} >
            <div className="m-4 form-group">
              <h2>Añade nuevo departamento</h2>
            </div>

            <div className="m-5 form-group">
              <label className="col-sm-2 col-form-label me-2">Nombre del departamento</label>
              <input
                className="d-inline form-control w-50"
                type="text"
                placeholder="Nombre del departamento"
                name="NombreDept"
                required
              />
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

export default AddDept;
