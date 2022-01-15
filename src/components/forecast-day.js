import React from 'react';
import ForecastDay from './forecast-day';

export default function forecastDay({day}) {
  return (
    <div className="forecast">
      <img src={day.icon}></img>
      {day.tempMin} &deg;C
      {day.tempMax} &deg;C
      {day.wind} km/h
    </div>
  )
}