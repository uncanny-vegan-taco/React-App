import React from "react";
import Search from "./Search";
import Header from "./Header";
import MainWeather from "./MainWeather";
import OtherInfo from "./OtherInfo";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function Content() {
  return (
    <div className="container">
      <div className="content">
        <div className="row">
          <Search />
          <Header />
          <MainWeather />
          <OtherInfo />
          <Forecast />
          <Footer />
        </div>
      </div>
    </div>
  );
}
