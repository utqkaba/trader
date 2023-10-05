import React from "react";
import ReactDOM from "react-dom/client";
import "@trendyol/baklava";
import { setIconPath } from "@trendyol/baklava";
import "@trendyol/baklava/dist/themes/default.css";
setIconPath("https://cdn.jsdelivr.net/npm/@trendyol/baklava@2.1.0/dist/assets");
import App from "./App";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);