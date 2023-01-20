import * as React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./app/store";
import App from "./app/App";
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = createRoot(rootElement);

root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
