import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <div className="col-12">
        <h1>Seattle, WA</h1>
      </div>
      <div className="row">
        <div className="col-12 subheader">
          <p>
            <span>11/02/2023</span> | <span>Misty</span>
          </p>
        </div>
      </div>
    </div>
  );
}
