import React, { useState } from "react";
import "./Search.css";
import "./MainWeather.css";
import "./OtherInfo.css";
import axios from "axios";
import Weather from "./Weather";

export default function Search() {
  let [city, setCity] = useState("Seattle");
  let [weather, setWeather] = useState();

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
      date: new Date(response.data.dt * 1000),
    });
    console.log(response.data);
  }
  function getWeather(event) {
    event.preventDefault();
    let api = "2ff29bed3181c3526c35cc5408037f85";
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
      <Weather weather={weather} />
    </div>
  );
}
