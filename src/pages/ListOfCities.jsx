import React from "react";
import { useNavigate } from "react-router-dom";
import useTurkeyCities from "use-turkey-cities";

function ListOfCities({ setLocation }) {
  const { cities, city, setCity } = useTurkeyCities();

  const navigate = useNavigate();

  const handleClick = () => {
    setLocation(city);
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center p-10">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCity(city);
        }}
        className="flex justify-center items-center"
      >
        <select
          onChange={(e) => {
            setCity(e.target.value);
          }}
          value={city}
          className="h-7 w-60 rounded-lg mr-6 px-2 outline-none show font-bold"
        >
          {cities.map((city) => (
            <option key={`city-${city}`} value={city}>
              {city}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-blue-500 text-white border-none  px-4 rounded-lg hover:bg-orange-500 h-7 show"
          onClick={handleClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ListOfCities;
