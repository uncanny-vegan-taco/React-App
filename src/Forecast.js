import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="weather-forecast">
      <div className="row">
        <div className="col">
          <p className="forecast-high">
            55<span>/35</span>
          </p>
        </div>
        <div className="col">
          <p className="forecast-high">
            55<span>/35</span>
          </p>
        </div>
        <div className="col">
          <p className="forecast-high">
            55<span>/35</span>
          </p>
        </div>
        <div className="col">
          <p className="forecast-high">
            55<span>/35</span>
          </p>
        </div>
        <div className="col">
          <p className="forecast-high">
            55<span>/35</span>
          </p>
        </div>
        <div className="col">
          <p className="forecast-high">
            55<span>/35</span>
          </p>
        </div>
      </div>
    </div>
  );
}
