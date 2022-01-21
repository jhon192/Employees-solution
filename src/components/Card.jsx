import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ url, title, logo }) => {
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div className="m-4">
      {!isAuthenticated ? (
        <div className="card" style={{ width: "20rem" }}>
          <img
            className="card-img-top"
            src={logo}
            alt="Card image cap"
            style={{ height: "250px" }}
          />
          <div className="card-body">
            <h5 className="card-title text-center">{title}</h5>
            <div className="text-center">
              <Link onClick={loginWithRedirect} className="btn btn-primary">
                ir a {title}
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="card" style={{ width: "20rem" }}>
          <img
            className="card-img-top"
            src={logo}
            alt="Card image cap"
            style={{ height: "250px" }}
          />
          <div className="card-body">
            <h5 className="card-title text-center">{title}</h5>
            <div className="text-center">
              <Link to={url} className="btn btn-primary">
                ir a {title}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
