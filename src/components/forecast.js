import React from 'react';
import ForecastDay from './forecast-day';

export default function forecast({forecastData}) {
  return (
    <div className="forecast">
      {forecastData.map((day, i) => {  
        if( i>0 && i <5 )   
          return (<ForecastDay key={i} day={day} />) 
      })}
  </div>
  )
}