import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import ListOfCities from "../pages/ListOfCities";
import TurkeyMap from "../pages/TurkeyMap";

function Weather() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="turkeyMap" element={<TurkeyMap />} />
          <Route path="listOfCities" element={<ListOfCities />} />
        </Routes>
        <Footer />
        
      </BrowserRouter>
    </div>
  );
}

export default Weather;