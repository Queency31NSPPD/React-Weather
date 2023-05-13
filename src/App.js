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
      and is Open-sourced on
      <a
        href="https://github.com/Queency31NSPPD/React-Weather"
        target="_blank"
      >
       GitHub
      </a>
      and
      <a href="https://boisterous-lily-f3b5ce.netlify.app/" target="_blank">
        Hosted on Netlify.
      </a>
    </small>
    </div>
  );
}
