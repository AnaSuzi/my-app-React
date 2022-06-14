import React from "react";
import "./App.css";
import SearchEngine from "./SearchEngine";
import WeatherForecast from "./WeatherForecast";
import CurrentWeather from "./CurrentWeather";

export default function Weather() {
  return (
    <div>
      <div className="container">
        <div className="app-wrapper">
          <div className="row">
            <SearchEngine />

            <CurrentWeather />

            <WeatherForecast />
          </div>
        </div>

        <script src="script.js"></script>
      </div>
    </div>
  );
}
