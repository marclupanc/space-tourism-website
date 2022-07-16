import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <div>
      <div className="header">
        <ul className="nav-items">
          <li>
            <span className="nav-numbers">00</span> HOME
          </li>
          <li>
            <span className="nav-numbers">01</span> DESTINATION
          </li>
          <li>
            <span className="nav-numbers">02</span> CREW
          </li>
          <li>
            <span className="nav-numbers">03</span> TECHNOLOGY
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
