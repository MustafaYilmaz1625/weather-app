import React from "react";
import { NavLink } from "react-router-dom";
import Moment from "moment";



const Navbar = () => {
  const formatDate = Moment().format("DD-MM-YYYY");
  return (
    <div className=' flex flex-row justify-between bg-slate-700 text-yellow-400'>
      <div className='flex flex-row'>
        <NavLink to='/' className='navlink mx-5 font-bold'>
          Weather App
        </NavLink>
        <nav>
          <ul className='flex flex-row'>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='turkeyMap'>Turkey Map</NavLink>
            </li>
            <li>
              <NavLink to='listOfCities'>List Cities</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className='flex items-center pr-5 font-bold'>
        <h1>{formatDate}</h1>
      </div>
    </div>
  );
}

export default Navbar