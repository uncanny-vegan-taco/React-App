import React from "react";
import icon from "./3143231.png";
import "./MainWeather.css";

export default function MainWeather() {
  return (
    <div className="row">
      <div className="col-6">
        <img src={icon} alt="icon" />
      </div>
      <div className="col-6 main-temp">
        <h1>51</h1>
        <span className="fahrenheit">F&deg;</span>
      </div>
    </div>
  );
}
