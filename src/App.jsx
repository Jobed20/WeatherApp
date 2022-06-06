import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import WeatherCard from './Components/WeatherCard';



function App() {

  const [latAndLong, setlatAndLong] = useState()
  const [apiData, setapiData] = useState({});
  

  useEffect(() => {
    const success = pos => {
      const longit = pos.coords.longitude;
      const latit = pos.coords.latitude;
      setlatAndLong({ latit, longit });
    };
    navigator.geolocation.getCurrentPosition(success);
  }, [])

  const APIkey= '91e977a67a332be491029ea25d0b60f1'
  useEffect(() => {
    if( latAndLong !== undefined){
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latAndLong.latit}&lon=${latAndLong.longit}&appid=${APIkey}&units=metric`)
        .then((res) => {
          const response = res.data;
          setapiData(response);
        })
      .catch(err => setapiData(err))
    }
  }, [latAndLong]);
  
  console.log(apiData);
  return (
    <div className="App">
         <WeatherCard apiData={apiData} />
    </div>  
  )
}

export default App;
