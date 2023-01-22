import * as React from "react";

import Navbar from "../features/navbar/Navbar";
import AppRoutes from "./AppRoutes";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="child-container">
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
