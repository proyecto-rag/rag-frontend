import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { RagApp } from "./RagApp";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <RagApp />
    </BrowserRouter>
  </StrictMode>
);
