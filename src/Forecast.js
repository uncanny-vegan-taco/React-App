import React, { useState, useEffect } from "react";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  useEffect(() => {
    setLoaded(false);
  }, [props.lat, props.lon]);
  function handleResponse(response) {
    setLoaded(true);
    setForecast(response.data.daily);
    console.log(response.data);
  }

  if (loaded) {
    return (
      <div className="weather-forecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let api = "64469ac67e6dc941feb5b50915a18dc7";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&appid=${api}&units=imperial`;
    axios.get(url).then(handleResponse);
    return "Loading...";
  }
}
