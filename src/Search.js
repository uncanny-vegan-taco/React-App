import React, { useState } from "react";
import "./Search.css";
import "./MainWeather.css";
import "./OtherInfo.css";
import axios from "axios";
import moment from "moment";

export default function Search() {
  let [city, setCity] = useState("Seattle");
  let [weather, setWeather] = useState({});
  function displayWeather(response) {
    setWeather({
      name: response.data.name,
      mainTemp: Math.round(response.data.main.temp),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      highTemp: Math.round(response.data.main.temp_max),
      lowTemp: Math.round(response.data.main.temp_min),
      feelTemp: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
    });
    console.log(response.data);
  }
  function getWeather(event) {
    event.preventDefault();
    let api = "bf54175800a55e59e6c4d6461deeef12";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=imperial`;
    axios.get(url).then(displayWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={getWeather}>
        <div className="row">
          <div className="col-sm-8">
            <input
              name="place"
              type="text"
              className="form-control"
              placeholder="Enter City Name..."
              autoComplete="off"
              onChange={updateCity}
            />
          </div>
          <div className="col-2">
            <button
              id="main-search"
              type="Submit"
              className="btn btn-secondary"
            >
              Search
            </button>
          </div>
          <div className="col-2">
            <button
              type="Submit"
              className="btn btn-secondary"
              id="current-button"
            >
              Current
            </button>
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-12">
          <h1>{weather.name}</h1>
        </div>
        <div className="row">
          <div className="col-12 subheader">
            <p>
              <span>{moment().format("MMMM do, H:mm")}</span> |{" "}
              <span>{weather.description}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <img src={weather.icon} alt="icon" />
        </div>
        <div className="col-6 main-temp">
          <h1>{weather.mainTemp}</h1>
          <span className="fahrenheit">F&deg;</span>
        </div>
      </div>
      <div className="col-12 other-temps">
        <h2 className="description">
          <span className="high-low-main">
            <span>{weather.highTemp}</span>&deg; |<span>{weather.lowTemp}</span>
            &deg;
          </span>
          <br />
          <div className="feels-like-text">
            Feels Like: <span className="feels-like">{weather.feelTemp}</span>
            &deg;
          </div>
        </h2>
      </div>
      <div className="col-12 info">
        <p>
          Humidity: <span>{weather.humidity}</span>% | Wind Speed:
          <span>{weather.wind}mph</span>
        </p>
      </div>
    </div>
  );
}
