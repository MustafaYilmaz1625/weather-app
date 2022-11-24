import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TurkeyMap from "turkey-map-react";

function TurkeyMapp({ setLocation }) {
  const [cityName, setCityName] = useState({ name: "", plateNumber: "" });
  const [isCity, setIsCity] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    setLocation(cityName.name);
    navigate("/");
  };

  const handleHover = (e) => {
    const { plateNumber, name } = e;
    setCityName({ plateNumber, name });
    setIsCity(true);
  };

  return (
    <div className="h-96">
      <div className="text-center pt-2 flex justify-center items-center h-16">
        {isCity ? (
          <>
            <div className="mr-4 rounded-3xl p-1 w-12 h-[2.6rem] flex justify-center items-center  border-4 border-dashed border-orange-400 bg-slate-600">
              <h1 className="font-extrabold text-slate-50 tracking-wide text-2xl">
                {cityName.plateNumber}
              </h1>
            </div>
            <div className="p-1 w-64 h-[2.6rem] flex justify-center items-center bg-orange-500 rounded-xl">
              <h1 className="font-extrabold text-slate-50 tracking-wide text-2xl">
                {cityName.name}
              </h1>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      <div>
        <TurkeyMap
          onClick={handleClick}
          hoverable={true}
          onHover={handleHover}
          customStyle={{ idleColor: "#ff0000", hoverColor: "#eeee" }}
        />
      </div>
    </div>
  );
}

export default TurkeyMapp;
