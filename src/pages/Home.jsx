import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Header from "../components/Header";

function Home({ location, weather }) {
  return (
    <div>
      <Header />
      <Button />
      <Card location={location} weather={weather} />
    </div>
  );
}

export default Home;
