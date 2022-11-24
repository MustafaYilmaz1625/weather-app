import React from "react";
import useTurkeyCities from "use-turkey-cities";

const ListOfCities = () => {
  const { cities, city, setCity, districts } = useTurkeyCities();

  return (
    <div className="flex justify-center items-center p-10">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(city, districts);
        }}
        className="flex justify-center  items-center mt-5"
      >
        <select
          className="box w-60 h-7  outline-none text-center rounded-lg px-2 mr-6"
          onChange={(e) => {
            setCity(e.target.value);
          }}
          value={city}
        >
          {cities.map((city) => (
            <option key={`city-${city}`} value={city}>
              {city}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="box border-none bg-blue-500 rounded-lg h-7 px-4 text-white hover:bg-green-600 "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ListOfCities;
