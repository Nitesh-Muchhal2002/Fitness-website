import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../images/logo.png";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { links } from "../Data";
import "./navbar.css";

function Navbar() {
  const [isNavShowing, setNavShowing] = useState(false);
  return (
    <nav>
      <div className="container nav_container">
        <Link to="/" className="logo">
          <img src={Logo} alt="Nav logo" />
        </Link>
        <ul className={`nav_links ${isNavShowing ? "show-nav" : "hide-nav"}`}>
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  onClick={() => setNavShowing((prev) => !prev)}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="nav_toggle-btn"
          onClick={() => setNavShowing((prev) => !prev)}
        >
          {isNavShowing ? <MdOutlineClose /> : <IoMdMenu />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
