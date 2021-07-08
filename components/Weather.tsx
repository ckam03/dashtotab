import React, { useContext, useState, useEffect } from "react";
//import WeatherForm from './WeatherForm';
import { ToggleContext } from './ToggleContext';
import Image from 'next/image';
import WeatherIcon from "./WeatherIcon";

const Weather = () => {
  //toggler state
  const { toggled } = useContext(ToggleContext);

  //initialize state
  const [weatherData, setweatherData] = useState({
    temperature: 0,
    location: "",
    icon: "",
    description: "",
  });

  useEffect(() => {
    //api call
    const fetchWeatherData = async () => {
      const url = '/api/weather';
      const result = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const weatherEvents = await result.json();
      console.log(weatherEvents)

      let string = weatherEvents.result.timezone;
      let res = string.split("/")
      
      //sets state of weatherData object
      setweatherData({
        temperature: Math.trunc(weatherEvents.result.current.temp),
        location: res[1],
        icon: weatherEvents.result.current.weather[0].icon,
        description: weatherEvents.result.current.weather[0].description,
      });
    };
    fetchWeatherData();
  }, []);
  return (
    <>
      {
        //if toggled is true, show the component
        toggled ? (
          <div className="flex flex-col items-center p-2 bg-white text-gray-800 backdrop-filter backdrop-blur-xl bg-opacity-60 rounded-lg absolute text-xl">
            <span className="text-2xl text-center pt-4 flex items-center justify-center">
              {weatherData.location}
            </span>
            <div className="flex items-center text-5xl space-x-2 px-2">
              <span className=""><WeatherIcon iconCode={weatherData.icon}/> </span>
              <div>{weatherData.temperature}&deg;</div>
            </div>
            {weatherData.description}
            {/* <span className="text-gray-800 text-2xl pb-4">
            </span> */}
          </div>
        ) : (
          false
        )
      }
    </>
  );
};
export default Weather;
