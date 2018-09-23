import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavMenu extends Component {
  render() {
    return (
      <div className="nav-menu">
        <ul>
          <li>
            <NavLink
              to="/bio"
              activeStyle={{
                fontWeight: "bold"
              }}
            >
              Bio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/works"
              activeStyle={{
                fontWeight: "bold"
              }}
            >
              Works
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              activeStyle={{
                fontWeight: "bold"
              }}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              activeStyle={{
                fontWeight: "bold"
              }}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              activeStyle={{
                fontWeight: "bold"
              }}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/test"
              activeStyle={{
                fontWeight: "bold"
              }}
            >
              Test
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
