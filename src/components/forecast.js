import React from 'react';
import ForecastDay from './forecast-day';

export default function forecast({forecastData}) {
  return (
    <div className="forecast">
      <div className="row">
        {forecastData.map((day, i) => {  
          if( i <5 )   
            return (<ForecastDay key={i} day={day} />) 
        })}
      </div>
  </div>
  )
}