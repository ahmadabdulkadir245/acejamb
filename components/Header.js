import React from "react";
import Banner from "./Banner";
import Navigation from "./Navigation";
import SideBar from "./SideBar";
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
