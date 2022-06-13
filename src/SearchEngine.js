import React, { useState } from "react";
import "./SearchEngine.css";
import axios from "axios";

export default function SearchEngine(props) {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState("");
  let [loaded, setLoaded] = useState(false);
  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      pressure: response.data.main.pressure,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "dde4ce8f57f17e44f0e63ba4ad67d15c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  if (loaded) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="look for a city"
            className="search-box"
            name="searchInput"
            onChange={updateCity}
          />
          <div>
            <input type="submit" value="Search" className="look" />
          </div>
        </form>
        <ul className="react-description">
          <li> {Math.round(weather.temperature)}°C</li>
          <li> {weather.description}</li>
          <li> {weather.pressure}hPa</li>
          <li> {weather.humidity}%</li>
          <li> {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="look for a city"
          className="search-box"
          name="searchInput"
          onChange={updateCity}
        />
        <div>
          <input type="submit" value="Search" className="look" />
        </div>
      </form>
    );
  }
}
