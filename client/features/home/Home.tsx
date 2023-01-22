import * as React from "react";

/**
 * COMPONENT
 */
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-left">
        <p className="about-header">
          We get you where you need to be.{" "}
          <span className="about-fast">Fast.</span>
        </p>
        <p className="about">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="home-btns">
          <button className="main-home-btn">Try it out</button>
          <button>Contact us</button>
        </div>
      </div>
      <div className="home-right">
        <p>some kind of graphic maybe</p>
      </div>
    </div>
  );
};

export default Home;
