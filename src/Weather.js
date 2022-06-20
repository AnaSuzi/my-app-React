import React from "react";
import "./App.css";

import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";

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
