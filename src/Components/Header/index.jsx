import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <a href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
              <g fill="none" fill-rule="evenodd">
                <circle cx="24" cy="24" r="24" fill="#FFF" />
                <path
                  fill="#0B0D17"
                  d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
                />
              </g>
            </svg>
          </a>
        </div>
        <div className="nav-list">
          <div className="nav-items">
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "link")}
              to="/"
            >
              <span className="nav-numbers">00</span> HOME
            </NavLink>
            <NavLink to="destination">
              <span className="nav-numbers">01</span> DESTINATION
            </NavLink>
            <NavLink to="crew">
              <span className="nav-numbers">02</span> CREW
            </NavLink>
            <NavLink to="technology">
              <span className="nav-numbers">03</span> TECHNOLOGY
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
