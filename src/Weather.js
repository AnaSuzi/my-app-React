import React from "react";
import "./App.css";
import SearchEngine from "./SearchEngine";
import WeatherForecast from "./WeatherForecast";

export default function Weather() {
  return (
    <div>
      <div className="container">
        <div className="app-wrapper">
          <div className="row">
            <SearchEngine />
            <div className="container">
              <div className="row justify-content-center first">
                <div className="col-12 col-sm-6">
                  <h1>
                    <span className="place">
                      <i className="fa-solid fa-location-dot"></i>
                    </span>
                    <span className="cityNew" id="city-name"></span>
                  </h1>
                  <h2>
                    <div className="currentCity" id="current"></div>
                    <br />
                    <div className="temp-now">
                      <span id="max-temp">16</span>°<span id="min-temp">5</span>
                      °
                    </div>
                    <br />
                    <div id="des"></div>
                  </h2>
                </div>

                <div className="col-12 col-sm-6">
                  <h3>
                    <span id="temp-number"> </span>

                    <span id="celsius"> 20 °C </span>
                  </h3>

                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                    id="icon"
                    alt="neki"
                  />
                </div>
              </div>
              <br />
              <br />

              <div className="row situation">
                <div className="col-3">
                  pressure
                  <br />
                  <strong>
                    <span id="pressure-number">1021</span>hPa
                  </strong>
                </div>

                <div className="col-3">
                  wind <br />
                  <strong>
                    <span id="wind-number">29</span>km/h
                  </strong>
                </div>

                <div className="col-3">
                  humidity <br />
                  <strong>
                    <span id="humidity-number">28</span>%
                  </strong>
                </div>
              </div>
              <br />
              <div className="weather-forecast" id="forecast"></div>
            </div>
          </div>
          <WeatherForecast />
        </div>
      </div>

      <div className="footer">
        <a
          href="https://github.com/AnaSuzi/my-app-React"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          open-source code
        </a>

        <div className="my-name">by Ana Caserman</div>
      </div>

      <script src="script.js"></script>
    </div>
  );
}
