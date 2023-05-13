import React from "react";
import ReactDom from "react-dom";
import Weather from "./Weather";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
    </div>
  );
}