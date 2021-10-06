import React from "react";
import ReactDOM from "react-dom";

import App from "./Container/App";

import "bootstrap/dist/css/bootstrap.min.css";
import GlobalState from "./Container/GlobalState";

ReactDOM.render(
  <React.StrictMode>
    <GlobalState>
      <App />
    </GlobalState>
  </React.StrictMode>,
  document.getElementById("root")
);
