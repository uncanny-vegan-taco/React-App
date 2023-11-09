import React from "react";
import Search from "./Search";

import Forecast from "./Forecast";
import Footer from "./Footer";

export default function Content() {
  return (
    <div className="container">
      <div className="content">
        <div className="row">
          <Search />

          <Forecast />
          <Footer />
        </div>
      </div>
    </div>
  );
}
