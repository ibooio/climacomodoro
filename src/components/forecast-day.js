import React from 'react';
import ForecastDay from './forecast-day';

export default function forecastDay({day}) {
  return (
    <div className="forecastDay">
      {/*{day.wind} km/h*/}
      <i className={day.icon}></i>
      <div className="minAndMaxTemp">
        <div className="minTemp"><span>Min:</span> {day.tempMin} &deg;C</div>
        <div className="maxTemp"><span>Max:</span> {day.tempMax} &deg;C</div>
      </div>
    </div>
  )
}