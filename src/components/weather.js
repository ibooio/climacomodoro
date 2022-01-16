import React from 'react';

export default function weather({weatherData}) {
  return (
    <div className="weather">
      <p className="location">{weatherData.location}</p>
      <div className="data">
        <i className={weatherData.icon}></i>
        <div className="actualTemp">{weatherData.temp} &deg;C</div>
        <div className="minAndMaxTemp">
          <div className="minTemp"><span>Min:</span> {weatherData.tempMin} &deg;C</div>
          <div className="maxTemp"><span>Max:</span> {weatherData.tempMax} &deg;C</div>
        </div>
        {/* <p className="wind">{weatherData.wind} km/h</p> */ }
      </div>    
  </div>
  )
}