import React from "react";
import TurkeyMap from "turkey-map-react";

const TurkeyMapp = () => {
  return (
    <div>
      <TurkeyMap
        customStyle={{ idleColor: "#dc3522", hoverColor: "#ffff" }}
        onClick={({ plateNumber, name }) =>
          console.log(plateNumber + " - " + name + " is just clicked!")
        }
        hoverable={true}
        onHover={({ plateNumber, name }) =>
          console.log("Cursor is over on " + plateNumber + " - " + name + "!")
        }
      />
    </div>
  );
};

export default TurkeyMapp;
