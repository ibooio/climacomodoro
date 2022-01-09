import React, { useEffect, useState } from "react";
import Weather from './components/weather';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState();
  const [error, setError] = useState(null);

  const OPEN_WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';
  const OPEN_WEATHER_ICON_URL = 'https://openweathermap.org/img/w';


  useEffect(() => {
    getWeather()
    .then(response => {
      const data = {
        location: response.name,
        temp: Math.round(response.main.temp),
        wind: Math.round(( (response.wind.speed * 3.6) + Number.EPSILON) * 100) / 100,
        icon: `${OPEN_WEATHER_ICON_URL}/${response.weather[0].icon}.png`
      }
      setWeatherData(data);
      setError(null);
    })
    .catch(err => {
      setError(err.message);
    });    

  }, [error])

  function getWeather() {
    return fetch(`${OPEN_WEATHER_API_URL}/weather?id=3860443&units=metric&lang=es&APPID=${process.env.REACT_APP_API_KEY}`)
    .then(response => response.json());
  }

  return (
    <div className="App">
      {(typeof weatherData != 'undefined') ? (
        <div>
          <Weather weatherData={weatherData}/>
        </div>
      ): (
        <div>
          Cargando...
        </div>
      )}
    </div>
  );
}

export default App;
