import React from "react";
import "./Forecast.css";
import WeatherIcons from "./WeatherIcons";

export default function Forecast() {
  return (
    <div className="weather-forecast">
      <div className="row">
        <div className="col">
          <div>Day</div>
          <div>
            <WeatherIcons />
          </div>
          <div>
            <span className="forecast-high">55</span>
            <span>/35</span>
          </div>
        </div>
        <div className="col">
          <div>Day</div>
          <div>
            <WeatherIcons />
          </div>
          <div>
            <span className="forecast-high">55</span>
            <span>/35</span>
          </div>
        </div>
        <div className="col">
          <div>Day</div>
          <div>
            <WeatherIcons />
          </div>
          <div>
            <span className="forecast-high">55</span>
            <span>/35</span>
          </div>
        </div>
        <div className="col">
          <div>Day</div>
          <div>
            <WeatherIcons />
          </div>
          <div>
            <span className="forecast-high">55</span>
            <span>/35</span>
          </div>
        </div>
        <div className="col">
          <div>Day</div>
          <div>
            <WeatherIcons />
          </div>
          <div>
            <span className="forecast-high">55</span>
            <span>/35</span>
          </div>
        </div>
        <div className="col">
          <div>Day</div>
          <div>
            <WeatherIcons />
          </div>
          <div>
            <span className="forecast-high">55</span>
            <span>/35</span>
          </div>
        </div>
      </div>
    </div>
  );
}
