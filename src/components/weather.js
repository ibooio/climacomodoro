import React from 'react';

export default function weather({weatherData}) {
  return (
    <div className="weather">
      <div className="row">
        <p className="location">{weatherData.location}</p>
      </div>
      <div className="row">
        <img src={weatherData.icon}></img>
        <p className="temp">{weatherData.temp} &deg;C</p>
        <p className="wind">{weatherData.wind} km/h</p>
      </div>    
  </div>
  )
}