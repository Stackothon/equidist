import * as React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./searchBar/searchBar";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <button className="home-btn">
          <NavLink className="site-name" to="/home">
            Equidist
          </NavLink>
        </button>
        <nav className="navbar-btns">
          <button>
            <NavLink to="/map">Map</NavLink>
          </button>
          <button>
            <NavLink to="/home">Docs</NavLink>
          </button>
          <button>
            <NavLink to="/home">About Us</NavLink>
          </button>
        </nav>
      </div>
      <div className="navbar-right">
        <SearchBar />
        <div className="github-icon">
          <img src="/img/github-mark-white.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
