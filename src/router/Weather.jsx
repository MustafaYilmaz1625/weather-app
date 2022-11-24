import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import ListOfCities from "../pages/ListOfCities";
import TurkeyMapp from "../pages/TurkeyMap";
import axios from "axios";

function Weather() {
  const [weather, setWeather] = useState();
  const [location, setLocation] = useState("Adıyaman");

  useEffect(() => {
    const getWeather = async () => {
      try {
        const datum = await axios(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e813d7a57f8e6eaf1c8c534da4ec575a&units=metric&lang=tr`
        );
        setWeather(datum.data);
      } catch (error) {
        console.log(error);
      }
    };
    getWeather();
  }, [location]);
  console.log(weather);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home location={location} weather={weather} />}
          />
          <Route
            path="turkeyMap"
            element={
              <TurkeyMapp
                weather={weather}
                location={location}
                setLocation={setLocation}
              />
            }
          />
          <Route
            path="listOfCities"
            element={
              <ListOfCities
                weather={weather}
                location={location}
                setLocation={setLocation}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Weather;
