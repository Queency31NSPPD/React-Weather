import React from "react";
import ReactDom from "react-dom";
import Weather from "./Weather";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <small>
      This project was coded by
      <a
        href="https://www.linkedin.com/in/bridget-nnenna-chukwu-82a30b149"
        target="_blank"
      >
        Bridget Nnenna
      </a>
      and is
      <a
        href="https://github.com/Queency31NSPPD/Sweet-Weather-App"
        target="_blank"
      >
        Open-sourced on GitHub
      </a>
      and
      <a href="https://incredible-torte-b671ef.netlify.app/" target="_blank">
        Hosted on Netlify.
      </a>
    </small>
    </div>
  );
}
