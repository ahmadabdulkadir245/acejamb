import React from "react";
import Banner from "./Banner";
import Navigation from "./Navigation";
import TopNav from "./TopNav";

function Header() {
  return (
    <div>
      <TopNav />
      <Navigation />
      <Banner />
    </div>
  );
}

export default Header;
