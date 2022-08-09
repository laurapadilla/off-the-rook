import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "minireset.css";
import "./fonts/Surt-Light.otf";
import "./fonts/Surt-Medium.otf";
import "./fonts/RecklessNeueTRIAL-BookItalic.otf";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
