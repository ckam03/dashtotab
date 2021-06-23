import React, { useContext, useState, useEffect } from "react";
//import WeatherForm from './WeatherForm';
import { ToggleContext } from './ToggleContext';
import Image from 'next/image';

const Weather = () => {
  //toggler state
  const { toggled } = useContext(ToggleContext);

  //initialize state
  const [weatherData, setweatherData] = useState({
    temperature: "",
    location: "",
    icon: "",
    description: "",
  });
  const [location, setLocation] = useState<string>("");

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
      console.log(weatherEvents);

      //sets state of weatherData object
      setweatherData({
        temperature: weatherEvents.result.list[0].main.temp,
        location: weatherEvents.result.city.name,
        icon: weatherEvents.result.list[0].weather[0].icon,
        description: weatherEvents.result.list[0].weather[0].description,
      });
    };
    fetchWeatherData();
  }, []);
  return (
    <>
      {
        //if toggled is true, show the component
        toggled ? (
          <div className="flex flex-col items-center bg-white bg-opacity-40 backdrop-filter backdrop-blur-2xl rounded-lg absolute w-64">
            <span className="text-2xl text-gray-800 bg-green-500 w-full rounded-t-lg text-center p-4 flex items-center justify-center">
              {weatherData.location}
            </span>
            <div className="flex items-center text-4xl text-gray-800 p-4">
              <Image
                src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                alt="icon"
                width={500}
                height={500}
              /> 
              {weatherData.temperature}&deg;
            </div>
            <span className="text-gray-800 text-2xl ">
              {weatherData.description}
            </span>
          </div>
        ) : (
          false
        )
      }
    </>
  );
};
export default Weather;
