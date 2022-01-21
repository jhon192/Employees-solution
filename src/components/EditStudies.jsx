import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "./Footer";
import Navbar from "./Navbar";

const EditStudies = ({ Studies, Dept, putStudies }) => {

    const { id } = useParams();

  return (
    <div className="">
      <Navbar />
      {Studies.filter((filt) => id == filt.id).map((value) => (
        <div className="container m-5">
          <div>
            <form
              className="form-group"
              onSubmit={(e) => {
                putStudies(e, value.id);
              }}
            >
              <div className="m-4 form-group">
                <h2>Editar nuevo estudio</h2>
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
                <label className="col-sm-2 col-form-label">
                  Tipo de empleo
                </label>
                <select className="d-inline form-select w-25" name="studiesid">
                  {Dept.filter((x) => Object.keys(x).length !== 0).map((x) => (
                    <option value={x.id}>{x.DeptoName}</option>
                  ))}
                </select>
              </div>
              <div className="m-4 form-group text-center">
                <input
                  type="submit"
                  className="btn btn-success"
                  value="Editar"
                />
              </div>
            </form>
          </div>
        </div>
      ))}
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default EditStudies;
