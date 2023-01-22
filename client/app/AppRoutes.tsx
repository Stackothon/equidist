import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../features/home/Home";
import MapApp from "../features/mapApp/mapApp";

/**
 * COMPONENT
 */

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/map" element={<MapApp />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
