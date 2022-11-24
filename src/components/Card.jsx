import React from "react";

function Card({ location, weather }) {
  return (
    <div className="flex justify-center m-[5%]  my-5 lg:my-7 pb-28">
      <div className="border border-orange-500 w-[39rem] h-64 sm:h-80 text-center rounded-2xl bg-yellow-500">
        <div>
          <h1 className="mt-1 lg:mt-2 font-bold lg:font-extrabold tracking-wide text-xl lg:text-2xl showw">
            {location}
          </h1>
        </div>
        <div>
          <div className="text-3xl lg:text-5xl mt-8 sm:mt-20 lg:mt-14 text-blue-800 font-extrabold">
            {weather?.main.temp}
            <sup>°C</sup>
          </div>
          <div className="mt-1 lg:mt-2 mb-7 sm:mb-14 lg:mb-8 capitalize font-bold text-orange-900">
            {weather?.weather[0].description}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="ml-1 lg:ml-3 p-2">
            <div className="flex items-center justify-center p-2 mb-1 border-2 border-yellow-900 rounded-2xl text-orange-5 text-sm lg:text-lg font-bold h-8 lg:h-11">
              {weather?.wind.speed} km/h
            </div>
            <div className="flex items-center justify-center px-3 h-8 lg:h-11 border-2 border-yellow-900 rounded-2xl text-orange-5 text-sm lg:text-lg font-bold">
              {weather?.main.humidity}%
            </div>
          </div>
          <div className="flex items-center mr-2 mb-3 lg:mb-2 lg:mr-3 border-2 border-yellow-900 rounded-2xl">
            <img
              src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`}
              alt=""
              className="w-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
