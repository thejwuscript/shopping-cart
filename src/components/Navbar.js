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
            to="/shop/all"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop/party"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Party
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop/card"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Card Games
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop/medical"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Medical
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
