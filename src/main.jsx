import React from "react";
import ReactDOM from "react-dom/client";
import WeatherContextProvider from "./context/WeatherContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.querySelector("#root")).render(
    <React.StrictMode>
        <WeatherContextProvider>
            <App />
        </WeatherContextProvider>
    </React.StrictMode>
);
