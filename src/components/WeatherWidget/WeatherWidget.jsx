import React from "react";
import "./WeatherWidget.css";
import { useState, useEffect, useRef } from "react";

import clear_icon from "../../assets/clear.png";
import cloud_icon from "../../assets/cloud.png";
import drizzle_icon from "../../assets/drizzle.png";
import rain_icon from "../../assets/rain.png";
import snow_icon from "../../assets/snow.png";

const WeatherWidget = () => {
  const [humidity, setHumidity] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [temperature, setTemperature] = useState("");
  const [location, setLocation] = useState("");
  const [searchValue, setSearchValue] = useState("Sydney");
  const [wicon, setWicon] = useState(cloud_icon);

  const fetchData = async () => {
    try {
      //If you'd like to test on your local machine change use the weather_api below and comment out the weather_api using the env variable

      // const weather_api = "9404ef99bc3df00abb0d9d8dc83508ee";
      const weather_api = import.meta.env.REACT_APP_WEATHER_API;

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${weather_api}`
      );
      const data = await response.json();
      setHumidity(data.main.humidity);
      setWindSpeed(data.wind.speed);
      setTemperature(Math.floor(data.main.temp));
      setLocation(data.name);
      if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
        setWicon(clear_icon);
      } else if (
        data.weather[0].icon === "02d" ||
        data.weather[0].icon === "02n"
      ) {
        setWicon(cloud_icon);
      } else if (
        data.weather[0].icon === "03d" ||
        data.weather[0].icon === "03n"
      ) {
        setWicon(drizzle_icon);
      } else if (
        data.weather[0].icon === "04d" ||
        data.weather[0].icon === "04n"
      ) {
        setWicon(drizzle_icon);
      } else if (
        data.weather[0].icon === "09d" ||
        data.weather[0].icon === "09n"
      ) {
        setWicon(rain_icon);
      } else if (
        data.weather[0].icon === "10d" ||
        data.weather[0].icon === "10n"
      ) {
        setWicon(rain_icon);
      } else if (
        data.weather[0].icon === "13d" ||
        data.weather[0].icon === "13n"
      ) {
        setWicon(snow_icon);
      } else {
        setWicon(clear_icon);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleSearch = () => {
    if (searchValue.trim() === "") {
      console.error("Please enter a valid city name");
      return;
    }
    fetchData();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      fetchData();
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Fetch weather data on component mount

  return (
    <div className="container">
      <div className="weather-title d-flex justify-content-center">
        Weather Widget
      </div>

      <div className="row justify-content-center">
        <input
          type="text"
          className="city-input col-4"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div className="search-icon col-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
            onClick={handleSearch}
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </div>
      </div>
      <div className="weather-image d-flex justify-content-center">
        <img src={wicon} alt="" />
      </div>
      <div className="weather-temp d-flex justify-content-center text-white">
        {temperature}°C
      </div>
      <div className="weather-location d-flex justify-content-center text-white">
        {location}
      </div>
      <div className="row justify-content-center">
        <div className="bottom-bar row col-6">
          <div className="col">
            <div className="humidity-percent col text-center text-white">
              {humidity}%
            </div>
            <div className="text-center text-white">Humidity</div>
          </div>
        </div>
        <div className="bottom-bar row col-6">
          <div className="col">
            <div className="wind-rate col text-center text-white">
              {windSpeed} km/h
            </div>
            <div className="text-center text-white">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
