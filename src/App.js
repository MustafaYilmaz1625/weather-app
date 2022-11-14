
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "./redux/slices/weatherSlices";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  const dispatch = useDispatch();
  const [city, setCity] = useState(localStorage.getItem("inputValue"));
  useEffect(() => {
    dispatch(fetchWeatherData(localStorage.getItem("inputValue")));
  }, [dispatch]);

  const state = useSelector((state) => state);
  const { weather, error } = state;
console.log(state)

  return (
    <div className="container-fluid vh-100 images" >
      <div className="row container pe-4 pe-sm-0 ms-1 ms-sm-5 ">
        <h2 className="text-center  p-5">Weather Forecast</h2>
        <div className="container-fluid container-md  ">
          <div className="row justify-content-center ">
            <div className="col col-sm-6 col-md-5 col-lg-4">
              <div className="input-group  mb-5">
                <input type="text" className="form-control " placeholder="Search City" aria-label="input" 
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                    localStorage.setItem("inputValue", e.target.value);
                  }}
                />
                <button className="btn btn-secondary" type="button" id="button-addon2" onClick={() => dispatch(fetchWeatherData(city))}>Search</button>
              </div>

            </div>
          </div>
          <div  className="row justify-content-center">
            <div className="col col-sm-6 col-md-5 col-lg-4">
            
              {city.length === 0 ? (
                <div className="container-fluid container-md p-3 rounded frame">
                <h1 className="text-center text-danger">PLEASE ENTER CITY!</h1>
                </div>
              ) : error ? (
                 <div className="container-fluid  container-md p-3  rounded frame">
                <h1 className="text-center text-danger">{error?.message.toUpperCase()}</h1>
                </div>
              ) : (
                <div className="container-fluid  container-md   rounded frame">

                  <div className="row m-3 ">
                    <div className="col-6 mt-4"><img className="img-fluid    rounded-circle " width={100} height={100} src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="/" /></div>
                    <div className="col-6 text-center pt-3">
                      <div className="row p-2  "><h1 className="fs-1 text-center text-white">{weather?.weather[0].main}</h1></div>
                      <div className="row text-white"> <h1 className="fs-1">
                        {((weather?.main.temp)-273.15).toFixed(2)}
                        <span className="text-warning ">°C</span>
                      </h1></div>
                    </div>
                  </div>

                  <div className="row text-white">
                    <h3 className="text-st p-3">{weather?.name}, {weather?.sys?.country}</h3>
                    <p className="text-center">
                      The weather condition in {weather?.name}, {weather?.sys?.country}{" "}
                      is described as : {weather?.weather[0].description} with a
                      temperature of {weather?.weather[0].description} with a
                      temperature of {((weather?.main.temp)-273.15).toFixed(2)} °C and a
                      humidity of {weather?.main?.humidity} %.
                    </p>

                  </div>

                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;



