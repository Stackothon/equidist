import * as React from "react";
import { ReactElement } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MapComponent from "../features/mapComponent/mapComponent";

const render = (status: Status): ReactElement => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return <h3>{status}</h3>;
};

const App = () => {
  const key = process.env.key ?? "";
  const center = { lat: 40.65382, lng: -73.9747 }; //Prospect Park
  const zoom = 14;

  return (
    <Wrapper apiKey={key} render={render}>
      <MapComponent center={center} zoom={zoom} />
    </Wrapper>
  );
};

export default App;
