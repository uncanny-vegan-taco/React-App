import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form>
      <div className="row">
        <div className="col-sm-8">
          <input
            type="text"
            className="form-control"
            placeholder="Enter City Name..."
            autocomplete="off"
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-secondary">
            Search
          </button>
        </div>
        <div className="col-2">
          <button
            type="submit"
            className="btn btn-secondary"
            id="current-button"
          >
            Current
          </button>
        </div>
      </div>
    </form>
  );
}
