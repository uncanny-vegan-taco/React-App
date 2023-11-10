import React from "react";
import "./Search.css";
import "./MainWeather.css";
import "./OtherInfo.css";

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
              <span>
                <FormattedDate date={props.weather.date} />
              </span>{" "}
              |{" "}
              <span className="text-capitalize">
                {props.weather.description}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <img src={props.weather.icon} alt="icon" />
        </div>
        <div className="col-6 main-temp">
          <h1>{props.weather.mainTemp}</h1>
          <span className="fahrenheit">F&deg;</span>
        </div>
      </div>
      <div className="col-12 other-temps">
        <h2 className="description">
          <span className="high-low-main">
            <span>{props.weather.highTemp}</span>&deg; |
            <span>{props.weather.lowTemp}</span>
            &deg;
          </span>
          <br />
          <div className="feels-like-text">
            Feels Like:{" "}
            <span className="feels-like">{props.weather.feelTemp}</span>
            &deg;
          </div>
        </h2>
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
