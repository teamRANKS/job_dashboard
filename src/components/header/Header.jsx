import React from "react";
import "./header.css";
import Search from "../search/Search";

const Header = () => {
  return (
    <header>
      <a href="#" className="footer_logo">
        Latest Job Link's
        <div className="search">
          <Search />
        </div>
      </a>
    </header>
  );
};

export default Header;
