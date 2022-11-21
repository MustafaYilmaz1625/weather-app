import React from "react";

function Card() {
  return (
    <div className="flex justify-center my-5 mx-5 lg:m-0 pb-28">
      <div className="border border-orange-500 w-[39rem] h-80 text-center rounded-2xl bg-yellow-500">
        <div>
          <h1 className="my-3 font-bold">İL</h1>
        </div>
        <div>
          <div className="text-5xl mt-14">Sıcaklık</div>
          <div className="mt-2 mb-16">Açık/Kapalı</div>
        </div>
        <div className=" flex justify-between">
          <div className=" p-2">
            <div className="pl-2">Km</div>
            <div className="pl-2">Yüzde</div>
          </div>
          <div className="flex items-center px-5">icon</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
