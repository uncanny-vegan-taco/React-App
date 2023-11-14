import React from "react";
import Search from "./Search";
import Footer from "./Footer";

export default function Content() {
  return (
    <div className="container">
      <div className="content">
        <div className="row">
          <Search />
          <Footer />
        </div>
      </div>
    </div>
  );
}
