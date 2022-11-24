import React,{useState,useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import ListOfCities from "../pages/ListOfCities";
import TurkeyMapp from "../pages/TurkeyMap";
import axios from "axios";

function Weather() {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState("Malatya");

  useEffect(() => {
    const getWeather = async () => {
      try {
        const datum = await axios(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1d12c08f60a32d55e546fb608651ceae&units=metric&lang=tr`
        );
        // console.log(datum.data);
        setWeather(datum.data);
      } catch (error) {
        console.log(error);
      }
    };
    getWeather();
  }, [city]);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="turkeyMap"
            element={
              <TurkeyMapp weather={weather} city={city} setCity={setCity} />
            }
          />
          <Route
            path="listOfCities"
            element={
              <ListOfCities weather={weather} city={city} setCity={setCity} />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Weather;