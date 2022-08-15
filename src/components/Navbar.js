import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to={process.env.PUBLIC_URL + "/shop/all"}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to={process.env.PUBLIC_URL + "/shop/family"}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Family
          </NavLink>
        </li>
        <li>
          <NavLink
            to={process.env.PUBLIC_URL +"/shop/party"}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Party
          </NavLink>
        </li>
        <li>
          <NavLink
            to={process.env.PUBLIC_URL +"/shop/medical"}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Medical
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
