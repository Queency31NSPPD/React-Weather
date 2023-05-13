import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature:response.data.main.temp,
    wind:response.data.wind.speed,
    humidity:response.data.main.humidity,
    icon:`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    description:response.data.weather[0].description
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "f5029b784306910c19746e40c14d6cd3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city.." onChange={updateCity} />

      <button type="Submit">Search</button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature:{Math.round(weather.temperature)}℃</li>
          <li>Description:{weather.description}</li>
          <li>Humidity:{weather.humidity}%</li>
          <li>Wind:{Math.round(weather.wind)}km/h</li>
          <li><img src={weather.icon} alt="{weather.description}" />
          </li>
        </ul>
      </div>
    );
  } else {
   <div>
        {form}
        <ul>
          <li>Temperature:{Math.round(weather.temperature)}℃</li>
          <li>Description:{weather.description}</li>
          <li>Humidity:{weather.humidity}%</li>
          <li>Wind:{Math.round(weather.wind)}km/h</li>
          <li><img src={weather.icon} alt="{weather.description}" />
          </li>
        </ul>
      </div>
  }
}
