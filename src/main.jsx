import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-fopwyk5gbf15lxbe.us.auth0.com"
      clientId="2RG4Y7ay0PdgCAEaWWpt2f36aCyPIHXM"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      audience="https://realestate-frontend-black.vercel.app"
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
