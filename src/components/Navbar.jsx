import React from "react";
import { NavLink } from "react-router-dom";
import Moment from "moment";

function Navbar() {
  const formatDate = Moment().format("DD-MM-YYYY");
  return (
    <div className=" flex flex-row justify-between bg-slate-700 text-yellow-400">
      <div className="flex flex-row">
        <NavLink
          to="/"
          className="navlink mx-5 font-bold hover:scale-125 hover:text-orange-500"
        >
          Weather App
        </NavLink>
        <nav className="hidden lg:block">
          <ul className="flex flex-row">
            <li className="hover:scale-125 hover:text-orange-500">
              <NavLink to="turkeyMap">Turkey Map</NavLink>
            </li>
            <li className="hover:scale-125 hover:text-orange-500">
              <NavLink to="listOfCities">List Cities</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center pr-5 font-bold">
        <h1>{formatDate}</h1>
      </div>
    </div>
  );
}

export default Navbar;
