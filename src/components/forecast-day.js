import React from 'react';
import ForecastDay from './forecast-day';

export default function forecastDay({day}) {
  return (
    <div className="forecast">
      {/*{day.wind} km/h*/}
      <img src={day.icon}></img>
      <div className="minAndMaxTemp">
        <div className="minTemp">{day.tempMin} &deg;C</div>
        <div className="maxTemp">{day.tempMax} &deg;C</div>
      </div>
    </div>
  )
}