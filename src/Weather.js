import React from "react";
import "./Header.css";
import "./Search.css";
import "./OtherInfo.css";
import WeatherTemperature from "./WeatherTemperature";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h1>{props.weather.name}</h1>
        </div>
        <div className="row">
          <div className="col-12 subheader">
            <p>
              <FormattedDate date={props.weather.date} /> |{" "}
              <span className="text-capitalize">
                {props.weather.description}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <WeatherTemperature
          icon={props.weather.icon}
          fahrenheitMain={props.weather.mainTemp}
          fahrenheitHigh={props.weather.highTemp}
          fahrenheitLow={props.weather.lowTemp}
          fahrenheitFeel={props.weather.feelTemp}
        />
      </div>
      <div className="col-12 info">
        <p>
          Humidity: <span>{props.weather.humidity}</span>% | Wind Speed:
          <span> {props.weather.wind}mph</span>
        </p>
      </div>
    </div>
  );
}
