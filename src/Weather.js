import React from "react";
import "./Header.css";
import "./Search.css";
import "./OtherInfo.css";
import "./MainWeather.css";
import WeatherIcons from "./WeatherIcons";
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
        <div className="main">
          <div className="col-6 icon">
            <WeatherIcons code={props.weather.icon} size={125} />
          </div>
          <div className="col-6 main-temp main">
            <h1>{props.weather.mainTemp}</h1>
            <span className="unit">°F</span>
          </div>
        </div>
        <div className="col-12 other-temps">
          <h2 className="description">
            <span className="high-low-main">
              <span>{props.weather.highTemp}</span>&deg; |{" "}
              <span> {props.weather.lowTemp}</span>
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
