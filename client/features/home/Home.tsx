import * as React from "react";
import { currentPlaces } from "../mapApp/mapAppSlice";
import { useAppSelector } from "../../app/store";

/**
 * COMPONENT
 */
const Home = () => {
  const places = useAppSelector(currentPlaces);
  return (
    <div>
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
    </div>
  );
};

export default Home;
