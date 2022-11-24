import React from "react";

function Header() {
  return (
    <div className="header">
      <h1 className="font-bold text-3xl md:text-4xl xl:text-6xl 2xl:text-6xl text-orange-500 my-4 md:mt-20 lg:mt-2">
        Welcome
      </h1>
      <h3 className="text-orange-500 text-xl md:text-2xl lg:text-3xl ">
        Click for the other cities' weather.
      </h3>
    </div>
  );
}

export default Header;
