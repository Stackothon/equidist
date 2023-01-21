import * as React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1>Equidist</h1>
      <nav>
        <h3>LOGO</h3>
        <button>
          <NavLink to="/map">Click Here For Map</NavLink>
        </button>
        <button>
          <NavLink to="/home">Click Here for Home</NavLink>
        </button>
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
