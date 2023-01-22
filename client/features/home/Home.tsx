import * as React from "react";
import { currentPlaces } from "../mapApp/mapAppSlice";
import { useAppSelector } from "../../app/store";

/**
 * COMPONENT
 */
const Home = () => {
  const places = useAppSelector(currentPlaces);
  return (
    <div className="home-container">
      {places.map((place) => {
        return (
          <div key={place.place_id}>
            <h3>{"Location " + (places.indexOf(place) + 1)}</h3>
            <p>{"Name: " + place.name}</p>
            <p>{"Address: " + place.formatted_address}</p>
            <p>{"Place Id: " + place.place_id}</p>
          </div>
        );
      })}
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
