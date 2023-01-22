import * as React from "react";
import { NavLink } from "react-router-dom";

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
        <div className="navbar-search">
          <img src="/img/search.svg" alt="search" />
          <form autoComplete="off">
            <input type="text" name="search" placeholder="Search..." />
          </form>
        </div>
        <div className="github-icon">
          <img src="/img/github-mark-white.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
