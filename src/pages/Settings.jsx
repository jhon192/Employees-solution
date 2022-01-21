import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useHistory } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Settings = (prop) => {
  const { user, isAuthenticated } = useAuth0();

  const [idAdmin, setIdAdmin] = useState("google-oauth2|117679112969468253648");

  const history = useHistory();

  const { Dept, postDept, putDept, deleteDept } = prop;

  const toggleButton = () => {
    let wrap = document.getElementById("toggle").style;
    if (wrap.display === "none") {
      wrap.display = "block";
    } else {
      wrap.display = "none";
    }
  };

  return (
    <div>
      {isAuthenticated && idAdmin === user.sub ? (
        <div>
          <Navbar />
          <div className="m-5">
            <form onSubmit={postDept}>
              <ul>
                {Dept
                  .filter((value) => Object.keys(value).length !== 0)
                  .map((x) => (
                    <div className="d-flex m-1">
                      <li>{x.name}</li>
                      <Link
                        className="btn btn-warning me-3 ms-3"
                        to={`/settings/edit/${x.id}`}
                      >
                        <i className="fas fa-pen"></i>
                      </Link>
                      <button
                        className="btn btn-danger me-3 ms-3"
                        onClick={(e) => {
                          e.preventDefault();
                          deleteDept(x.id, x);
                        }}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  ))}
              </ul>
              <div className="w-25">
                <label className="form-label mt-4">Categorias</label>
                <input
                  type="text"
                  className="form-control w-100"
                  name="addDept"
                  placeholder="Anadir mas categorias"
                />
                <input
                  type="submit"
                  value="Anadir"
                  className="btn btn-primary mt-2"
                  style={{ textAlign: "center" }}
                />
              </div>
              <div>
                <label className="form-label mt-4">Limite</label>
                <input
                  type="number"
                  className="form-control w-25"
                  placeholder="cambiar el limite"
                />
              </div>
            </form>
          </div>
          <Footer />
        </div>
      ) : (
        setTimeout(() => {
          history.push({ pathname: "/" });
        }, 1000)
      )}
    </div>
  );
};

export default Settings;
