import React from "react";
import "./styles.css";

const Home = () => {
  return (
    <div className="homeBody">
      <div className="intro">
        <div className="text">
          <span className="title"> SO, YOU WANT TO TRAVEL TO</span>
          <div className="space"> Space</div>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </div>
        <div className="explore">
          <a href="#" className="large-button">
            Explore
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
