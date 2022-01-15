import React, { useEffect, useState } from "react";
import Weather from './components/weather';
import Forecast from './components/forecast';
import './App.css';
import './assets/icons/css/weather-icons.min.css';

function App() {
  const [weatherData, setWeatherData] = useState();
  const [forecastData, setForecastData] = useState();
  const [error, setError] = useState(null);

  const OPEN_WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';

  useEffect(() => {
    getWeatherAndForecast()
    .then(response => {
      console.log(response);
      const data = {
        weather: {
          location: 'Comodoro Rivadavia',
          temp: Math.round(response.current.temp),
          tempMin: Math.round(response.daily[0].temp.min),
          tempMax: Math.round(response.daily[0].temp.max),
          wind: Math.round(( (response.current.wind_speed * 3.6) + Number.EPSILON) * 100) / 100,
          icon: 'wi wi-owm-' + response.current.weather[0].id
        },
        forecast: response.daily.map(function(day){
          return {
            tempMin: Math.round(day.temp.min),
            tempMax: Math.round(day.temp.max),
            wind: Math.round(( (day.wind_speed * 3.6) + Number.EPSILON) * 100) / 100,
            icon: 'wi wi-owm-' + day.weather[0].id
          };
        })
      }
      console.log(data);
      setWeatherData(data.weather);
      setForecastData(data.forecast);
      setError(null);
    })
    .catch(err => {
      setError(err.message);
    });
  }, [error])

  function getWeatherAndForecast(){
    return fetch(`${OPEN_WEATHER_API_URL}/onecall?lat=-45.8667&lon=-67.5&units=metric&lang=es&cnt=16&APPID=${process.env.REACT_APP_API_KEY}`)
    .then(response => response.json());
  }

  return (
    <div className="App">
      {(typeof weatherData != 'undefined' && typeof forecastData != 'undefined') ? (
        <div>
          <Weather weatherData={weatherData}/>
          <Forecast forecastData={forecastData}/>
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
