import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavMenu extends Component {
  render() {
    return (
      <div className="nav-menu">
        <ul>
          <li>
            <NavLink to="/bio">Bio</NavLink>
          </li>
          <li>
            <NavLink to="/works">Works</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
