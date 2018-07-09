import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = props => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <ul className="nav navbar-nav">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/items">Shopping List</NavLink>
        </li>
        <li>
          <NavLink to="/items/new">Add Item</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
