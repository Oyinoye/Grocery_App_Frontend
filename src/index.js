import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { jwtState } from "./atoms/jtwAtom";

axios.defaults.baseURL = "http://127.0.0.1:800";
axios.defaults.headers.common["Authorization"] = `Bearer ${jwtState.key}`;
axios.defaults.headers.post["Content-Type"] = "application/json";

ReactDOM.render(
  <RecoilRoot>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecoilRoot>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
