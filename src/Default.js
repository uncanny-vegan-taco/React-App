import React from "react";
import "./Search.css";
import "./MainWeather.css";
import "./OtherInfo.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Default() {
  let city = "Seattle";
  function displayWeather(response) {
    let mainTemp = Math.round(response.data.main.temp);
    let icon = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
    let description = response.data.weather[0].description;
    let highTemp = Math.round(response.data.main.temp_max);
    let lowTemp = Math.round(response.data.main.temp_min);
    let feelTemp = Math.round(response.data.main.feels_like);
    let humidity = response.data.main.humidity;
    let wind = Math.round(response.data.wind.speed);
    let date = new Date(response.data.dt * 1000);
    console.log(response.data);
    console.log(date);
    return (
      <div>
        <form>
          <div className="row">
            <div className="col-sm-8">
              <input
                name="place"
                type="text"
                className="form-control"
                placeholder="Enter City Name..."
                autoComplete="off"
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
            <h1>{city}</h1>
          </div>
          <div className="row">
            <div className="col-12 subheader">
              <p>
                <span>
                  <FormattedDate date={date} />
                </span>{" "}
                | <span className="text-capitalize">{description}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <img src={icon} alt="icon" />
          </div>
          <div className="col-6 main-temp">
            <h1>{mainTemp}</h1>
            <span className="fahrenheit">F&deg;</span>
          </div>
        </div>
        <div className="col-12 other-temps">
          <h2 className="description">
            <span className="high-low-main">
              <span>{highTemp}</span>&deg; |<span>{lowTemp}</span>
              &deg;
            </span>
            <br />
            <div className="feels-like-text">
              Feels Like: <span className="feels-like">{feelTemp}</span>
              &deg;
            </div>
          </h2>
        </div>
        <div className="col-12 info">
          <p>
            Humidity: <span>{humidity}</span>% | Wind Speed:
            <span> {wind}mph</span>
          </p>
        </div>
        {getWeather()}
      </div>
    );
  }
  function getWeather(city) {
    let api = "bf54175800a55e59e6c4d6461deeef12";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=imperial`;
    axios.get(url).then(displayWeather);
  }
}
