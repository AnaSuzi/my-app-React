import React, { useState } from "react";
import "./App.css";

export default function SearchEngine() {
  let [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let cityName = event.target.searchInput.value;
    if (cityName.length > 0) {
      setCity(`${cityName}`);
    } else {
      setCity("");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="look for a city"
          className="search-box"
          name="searchInput"
        />
        <input type="submit" value="Search" className="look" />
      </form>
      <h1>{city}</h1>
    </div>
  );
}
