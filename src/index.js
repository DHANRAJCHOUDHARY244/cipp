import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// contexts
import SettingsProvider from "./contexts/SettingsContext";
const containerStyle = {
  display: 'flex',
  height: '100vh', // Set the container to take up the full viewport height
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div style={containerStyle}>
  <React.StrictMode>
    <HelmetProvider>
      <SettingsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SettingsProvider>
    </HelmetProvider>
  </React.StrictMode>
  </div>
);

reportWebVitals();
