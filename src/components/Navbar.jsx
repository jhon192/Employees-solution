import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const toggleButton = () => {
    let wrap = document.getElementById("navbarColor01").style;
    if (wrap.display === "none") {
      wrap.display = "block";
    } else {
      wrap.display = "none";
    }
  };

  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-lg-between">
        <h2>Aduanas Corp.</h2>
        {/* info */}
        {isAuthenticated ? (
          <div className="d-flex align-items-end p-1">
            <h4
              className="me-1"
              style={{ fontFamily: "Oxigen", fontSize: "20px" }}
            >
              {user.name}
            </h4>
            <img src={user.picture} alt={user.name} height="50" width="50" />
          </div>
        ) : (
          ""
        )}
      </div>

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleButton}
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarColor01">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
              <div className="container-fluid w-100">
                <div className="d-flex justify-content-between collapse navbar-collapse mt-2 w-100">
                  <form className="d-flex">
                    <Link
                      to="/"
                      className="btn btn-success pe-4 ps-4 me-4 ms-4"
                    >
                      <li className="fas fa-home">
                        
                      </li>
                    </Link>
                  </form>
                  <div>
                    <ul
                      className="d-flex navbar-nav me-auto ms-5"
                      style={{ listStyle: "none", marginBottom: 0 }}
                    >
                      

                      {/* login, logout and admin config */}
                      { isAuthenticated ? (
                        <div className="d-flex navbar-nav me-auto ms-5">
                          <li style={{ width: "180px" }}>
                            <Link
                              onClick={logout}
                              className="btn btn-danger pe-4 ps-4 me-4 ms-4"
                            >
                              Log out
                            </Link>
                          </li>
                        </div>
                      ) : (
                        <Link
                          onClick={loginWithRedirect}
                          className="btn btn-light pe-4 ps-4 me-4 ms-4"
                        >
                          Log In / Sign up
                        </Link>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
