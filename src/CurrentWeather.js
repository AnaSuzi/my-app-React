import React, { useState } from "react";
import "./CurrentWeather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function CurrentWeather(props) {
  let [weather, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      pressure: response.data.main.pressure,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
    });
  }
  function search() {
    let apiKey = "dde4ce8f57f17e44f0e63ba4ad67d15c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weather.ready) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="look for a city"
            className="search-box"
            name="searchInput"
            onChange={handleCityChange}
          />
          <div>
            <input type="submit" value="Search" className="look" />
            <button className="location-button">current location</button>
          </div>
        </form>
        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    search();
  }
}
