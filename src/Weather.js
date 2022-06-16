import React from "react";
import "./App.css";

import WeatherForecast from "./WeatherForecast";
import CurrentWeather from "./CurrentWeather";

export default function Weather() {
  return (
    <div>
      <div className="container">
        <div className="app-wrapper">
          <div className="row">
            <CurrentWeather defaultCity="Ljubljana" />
            <WeatherForecast />
          </div>
        </div>

        <script src="script.js"></script>
      </div>
    </div>
  );
}
