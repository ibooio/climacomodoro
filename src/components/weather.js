import React from 'react';

export default function weather({weatherData}) {
  return (
    <div className="weather">
      <div className="row">
        <p className="location">{weatherData.location}</p>
      </div>
      <div className="row">
        <img src={weatherData.icon}></img>
        <div className="actualTemp">{weatherData.temp} &deg;C</div>
        <div className="minAndMaxTemp">
          <div className="minTemp">{weatherData.tempMin} &deg;C</div>
          <div className="maxTemp">{weatherData.tempMax} &deg;C</div>
        </div>
        {/* <p className="wind">{weatherData.wind} km/h</p> */ }
      </div>    
  </div>
  )
}