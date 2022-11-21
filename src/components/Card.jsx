import React from "react";

function Card() {
  return (
    <div className="flex justify-center my-5">
      <div className="border border-orange-500 w-[39rem] h-80 text-center rounded-2xl bg-yellow-500">
        <div>
          <h1>İL</h1>
        </div>
        <div>
          <div>Sıcaklık</div>
          <div>Açık/Kapalı</div>
        </div>
        <div>
          <div>
            <div>Km</div>
            <div>Yüzde</div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Card;
