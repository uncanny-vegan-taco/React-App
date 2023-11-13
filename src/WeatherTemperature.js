import React, { useState } from "react";
import "./MainWeather.css";
import WeatherIcons from "./WeatherIcons";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  if (unit === "fahrenheit") {
    return (
      <div>
        <div className="main">
          <div className="col-6 icon">
            <WeatherIcons code={props.icon} />
          </div>
          <div className="col-6 main-temp main">
            <h1>{props.fahrenheitMain}</h1>
            <span className="unit">
              °F |{" "}
              <a href="/" onClick={showCelsius}>
                °C
              </a>
            </span>
          </div>
        </div>
        <div className="col-12 other-temps">
          <h2 className="description">
            <span className="high-low-main">
              <span>{props.fahrenheitHigh}</span>&deg; |
              <span>{props.fahrenheitLow}</span>
              &deg;
            </span>
            <br />
            <div className="feels-like-text">
              Feels Like:{" "}
              <span className="feels-like">{props.fahrenheitFeel}</span>
              &deg;
            </div>
          </h2>
        </div>
      </div>
    );
  } else {
    let celsiusMain = Math.round((props.fahrenheitMain - 32) * (5 / 9));
    let celsiusHigh = Math.round((props.fahrenheitHigh - 32) * (5 / 9));
    let celsiusLow = Math.round((props.fahrenheitLow - 32) * (5 / 9));
    let celsiusFeel = Math.round((props.fahrenheitFeel - 32) * (5 / 9));
    return (
      <div>
        <div className="main">
          <div className="col-6 icon">
            <WeatherIcons code={props.icon} />
          </div>
          <div className="col-6 main-temp main">
            <h1>{celsiusMain}</h1>
            <span className="unit">
              <a href="/" onClick={showFahrenheit}>
                °F
              </a>{" "}
              | °C
            </span>
          </div>
        </div>
        <div className="col-12 other-temps">
          <h2 className="description">
            <span className="high-low-main">
              <span>{celsiusHigh}</span>&deg; |<span>{celsiusLow}</span>
              &deg;
            </span>
            <br />
            <div className="feels-like-text">
              Feels Like: <span className="feels-like">{celsiusFeel}</span>
              &deg;
            </div>
          </h2>
        </div>
      </div>
    );
  }
}
