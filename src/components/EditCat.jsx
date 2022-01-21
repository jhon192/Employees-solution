import React from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const EditCat = (prop) => {
  const { id } = useParams();
  const { putDept, Dept } = prop;

  return (
    <div>
      <Navbar />
      {Dept
      .filter((value) => value.id == id)
      .map((x) => (
        <form
          onSubmit={(e) => {
            putDept(e, x.id);
          }}
        >
          <div className="m-5 form-group">
            <label className="col-sm-2 col-form-label me-2">Editar Departament</label>
            <input
              type="text"
              className="d-inline form-control w-50"
              name="EditDept"
              placeholder="Editar departamento"
            />
            
          </div>
          <div className="text-center">
          <input
              type="submit"
              value="Editar"
              className="btn btn-primary mt-2"
              style={{ textAlign: "center" }}
            />
          </div>
        </form>
      ))}
      <Footer />
    </div>
  );
};

export default EditCat;
