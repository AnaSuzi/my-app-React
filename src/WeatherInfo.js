import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="weather-info">
      <div className="CurrentWeather">
        <div className="container">
          <div className="row justify-content-center first">
            <div className="col-12 col-sm-6">
              <h1>
                <span className="place">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <span className="current">{props.data.city}</span>
              </h1>
              <h2>
                <div className="text-capitalize date">
                  <FormattedDate date={props.data.date} />
                </div>

                <div className="temp-now">
                  <span id="max-temp">10</span>°<span>5</span>°
                </div>

                <div className="description">{props.data.description}</div>
              </h2>
            </div>
            <div className="col-12 col-sm-6">
              <h3>
                <span className="temp-number">
                  {" "}
                  {Math.round(props.data.temperature)}
                </span>

                <span className="celsius">°C </span>
              </h3>

              <img
                src={props.data.iconUrl}
                id="icon"
                alt={props.data.description}
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
                <span id="pressure-number">{props.data.pressure}</span>hPa
              </strong>
            </div>

            <div className="col-3">
              wind <br />
              <strong>
                <span id="wind-number">{props.data.wind}</span>km/h
              </strong>
            </div>

            <div className="col-3">
              humidity <br />
              <strong>
                <span id="humidity-number">{props.data.humidity}</span>%
              </strong>
            </div>
          </div>
          <br />
          <div className="weather-forecast" id="forecast"></div>
        </div>
      </div>
    </div>
  );
}
