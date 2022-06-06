import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCloud, faTemperatureFull, faDroplet, faWind} from '@fortawesome/free-solid-svg-icons'

const WeatherCard = ({apiData}) => {
  
  const [celcius, setcelcius] = useState(true)
  const tempFarenheit = (((apiData.main?.temp ) * 1.8) + 32).toFixed(1);
  
  return (
    <div className='weather-card'>
      <h1>Weather App</h1>
      <ul>
      <li>
          <p>{apiData.name}, {apiData.sys?.country}</p>
        </li>
         <img
            src={`http://openweathermap.org/img/wn/${apiData.weather?.[0].icon}@2x.png`}/>
        <li>
          <p>{apiData.weather?.[0].main}, {apiData.weather?.[0].description}</p>
        </li>
        <li>
         <p><FontAwesomeIcon icon={faCloud}/> Clouds: {apiData.clouds?.all}%</p>
        </li>
        <li>
          <p> <FontAwesomeIcon icon={faDroplet}/> Humidity: {apiData.main?.humidity}%</p>
        </li>
        <li>
          <p> <FontAwesomeIcon icon={faWind}/> Wind: {apiData.wind?.speed} m/s</p>
        </li>
        <li>
          <p> <FontAwesomeIcon icon={faTemperatureFull}/> Temperature: {celcius ? `${apiData.main?.temp} °C` : `${tempFarenheit} °F`} </p>
        </li>
        <button onClick={() => setcelcius(!celcius)} className='BTN'>Change °F/°C</button>
      </ul>
    </div>
  )
}

export default WeatherCard