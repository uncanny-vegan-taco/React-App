import React from "react";
import "./OtherInfo.css";

export default function OtherInfo() {
  return (
    <div>
      <div className="col-12 other-temps">
        <h2 className="description">
          <span className="high-low-main">
            <span>59</span>&deg; |<span>35</span>&deg;
          </span>
          <br />
          <div className="feels-like-text">
            Feels Like: <span class="feels-like"></span>&deg;
          </div>
        </h2>
      </div>
      <div className="col-12 info">
        <p>
          Humidity: <span>60</span>% | Wind Speed:
          <span>5mph</span>
        </p>
      </div>
    </div>
  );
}
