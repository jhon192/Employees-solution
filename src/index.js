import React from "react";
import ReactDOM from "react-dom";
import "bootswatch/dist/cosmo/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const { REACT_APP_DOMAIN, REACT_APP_CLIENTID } = process.env;

ReactDOM.render(
  <Auth0Provider
    domain={REACT_APP_DOMAIN}
    clientId={REACT_APP_CLIENTID}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
