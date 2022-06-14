import React, { useState } from "react";
import "./CurrentWeather.css";
import axios from "axios";

export default function CurrentWeather(props) {
  let [weather, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      pressure: response.data.main.pressure,
      date: "fake date, time",
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  if (weather.ready) {
    return (
      <div>
        <form>
          <input
            type="search"
            placeholder="look for a city"
            className="search-box"
            name="searchInput"
          />
          <div>
            <input type="submit" value="Search" className="look" />
            <button className="location-button">current location</button>
          </div>
        </form>
        <div className="CurrentWeather">
          <div className="container">
            <div className="row justify-content-center first">
              <div className="col-12 col-sm-6">
                <h1>
                  <span className="place">
                    <i className="fa-solid fa-location-dot"></i>
                  </span>
                  <span className="current">{weather.city}</span>
                </h1>
                <h2>
                  <div className="text-capitalize date">{weather.date}</div>

                  <div className="temp-now">
                    <span id="max-temp">10</span>°<span>5</span>°
                  </div>

                  <div className="description">{weather.description}</div>
                </h2>
              </div>
              <div className="col-12 col-sm-6">
                <h3>
                  <span className="temp-number">
                    {" "}
                    {Math.round(weather.temperature)}
                  </span>

                  <span className="celsius">°C </span>
                </h3>

                <img
                  src={weather.iconUrl}
                  id="icon"
                  alt={weather.description}
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
                  <span id="pressure-number">{weather.pressure}</span>hPa
                </strong>
              </div>

              <div className="col-3">
                wind <br />
                <strong>
                  <span id="wind-number">{weather.wind}</span>km/h
                </strong>
              </div>

              <div className="col-3">
                humidity <br />
                <strong>
                  <span id="humidity-number">{weather.humidity}</span>%
                </strong>
              </div>
            </div>
            <br />
            <div className="weather-forecast" id="forecast"></div>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "New York";
    let apiKey = "dde4ce8f57f17e44f0e63ba4ad67d15c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
}
