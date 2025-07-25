import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SetRegion from "./Context/SetRegion.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SetRegion>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </SetRegion>
  </StrictMode>
);
