import React from "react";
import WeatherIcons from "./WeatherIcons";
import "./Forecast.css";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="row">
      <div className="col">
        <div className="day">{day()}</div>
        <div className="forecast-icon">
          <WeatherIcons code={props.data.weather[0].icon} size={30} />
        </div>
        <div className="forecast-temps">
          <span className="forecast-high">{maxTemperature()}</span>
          <span> | {minTemperature()}</span>
        </div>
      </div>
    </div>
  );
}
