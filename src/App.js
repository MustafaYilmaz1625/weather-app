import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "./redux/slices/weatherSlices";

function App() {
  const dispatch = useDispatch();
  const [city, setCity] = useState(localStorage.getItem("inputValue"));
  useEffect(() => {
    dispatch(fetchWeatherData(localStorage.getItem("inputValue")));
  }, [dispatch]);
  const state = useSelector((state) => state);
  const { weather, loading, error } = state;

  return (
    <div className="container-fluid vh-100 images" >
      <div className="row row-col-1">

        <h2 className="text-center p-5">Weather Forecast</h2>
        <div className="container-fluid container-md  ">
          <div className="row justify-content-center ">
            <div className="col col-sm-6 col-md-5 col-lg-4">
              <div className="input-group  mb-5">
                <input type="text" className="form-control " placeholder="Search City" aria-label="Recipient's username" aria-describedby="button-addon2"
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

          <div className="row justify-content-center">
            <div className="col col-sm-6 col-md-5 col-lg-4">
              {loading ? (
                <h1 className="text-center  text-light">Loading please wait..</h1>
              ) : error ? (
                <h1 className="text-center text-danger">{error?.message}</h1>
              ) : (
                <div className="container-fluid  container-md   rounded frame">

                  <div className="row m-3 ">
                    <div className="col-6 mt-4"><img className="img-fluid    rounded-circle " width={100} height={100} src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="/" /></div>
                    <div className="col-6 text-center pt-3">
                      <div className="row p-2  "><h1 className="fs-1 text-center ">clean</h1></div>
                      <div className="row"> <h1 className="fs-1">
                        {Math.ceil(Number(weather?.main.temp))}
                        <span className="text-warning ">°C</span>
                      </h1></div>
                    </div>
                  </div>

                  <div className="row ">
                    <h3 className="text-st p-3">{weather?.name}, {weather?.sys?.country}</h3>
                    <p className="text-center">
                      The weather condition in {weather?.name}, {weather?.sys?.country}{" "}
                      is described as : {weather?.weather[0].description} with a
                      temperature of {weather?.weather[0].description} with a
                      temperature of {Math.ceil(Number(weather?.main.temp))} °C and a
                      humidity of {weather?.main?.humidity} %
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

// return (
//   <div class="container-fluid vh-100 bg-light  ">
//     <section className="container  text-center">
//       <h2 className="text-center p-5">Weather App</h2>
//       <div class="container input-group w-50 pb-5">
// {/* <input
//   type="text"
//   className="form-control "
//   placeholder="Search City" */}



// />
//         <button
//           className="btn btn-outline-secondary"
//           onClick={() => dispatch(fetchWeatherData(city))}
//           type="button"
//           id="button-addon2"
//         >
//           Search
//         </button>
//       </div>

//       {loading ? (
//         <h1 className="text-center  text-light">Loading please wait..</h1>
//       ) : error ? (
//         <h1 className="text-center text-danger">{error?.message}</h1>
//       ) : (
//         <div className="container  border w-50 border-secondary  rounded-2 border-1">
//           <div className="d-flex bg-light justify-content-start item-center">
//             <span className=" item-center justify-content-center  border border-2 rounded-circle w-25 h-25 ">
//               <img
//                 className="w-56"
//                 src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
// src = { "https://cdn.vectorstock.com/i/1000x1000/65/84/give-an-instruction-vector-3056584.webp"}
//                 alt="/"
//               />
//             </span>
//             <h1 className="fs-1 p-lg-4">{weather?.weather[0].main}</h1>
//           </div>
//           <h1>
//             {Math.ceil(Number(weather?.main.temp))}
//             <span className="text-500 ">°C</span>
//           </h1>
//           <h3 className="fs-6 float-start">
//             {weather?.name}, {weather?.sys?.country}
//           </h3>
//           <br />
//           <p className=" float-start pb-5">
//             The weather condition in {weather?.name}, {weather?.sys?.country}{" "}
//             is described as : {weather?.weather[0].description} with a
//             temperature of {weather?.weather[0].description} with a
//             temperature of {Math.ceil(Number(weather?.main.temp))} °C and a
//             humidity of {weather?.main?.humidity} %
//           </p>
//         </div>
//       )}
//     </section>
//   </div>
// );
