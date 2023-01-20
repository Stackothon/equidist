import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../features/home/Home";

/**
 * COMPONENT
 */

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
