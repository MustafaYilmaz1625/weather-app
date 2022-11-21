import React from "react";
import { NavLink } from "react-router-dom";

function Button() {
  return (
    <div className="flex flex-row justify-center items-center">
      <NavLink to="turkeyMap" className="btn hover:bg-orange-500 mr-4">
        Turkey Map
      </NavLink>
      <NavLink to="listOfCities" className="btn hover:bg-orange-500">
        List of Cities
      </NavLink>
    </div>
  );
}
export default Button;
