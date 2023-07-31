import React from "react";
import { BarraPorcentaje } from "./BarraPorcentaje";

function DetailCard({ data }) {
  const { main, wind } = data.list[0];
  return (
    <div className="container max-[1003px]:grid-cols-1 justify-center  text-center grid gap-10 grid-cols-2 shadow-lg  text-white  mb-auto">
      <div className="my-auto flex flex-col justify-around bg-color-summarycard h-52">
        <p className=" text-lg">Wind status: {Math.round(wind.speed)} mph</p>
        <p className=" font-bold text-7xl">{Math.round(wind.speed)} mph</p>
        <div className="flex justify-center text-center items-center">
          <div className=" bg-opacity-50 mr-5">
            <button
              className=" cursor-pointer items-center rounded-full w-9 h-9 flex justify-center bg-gray-600"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <g clip-path="url(#clip0_1_98)">
                  <path
                    d="M8.01348 17.2203L9.61278 5.38071C9.70167 4.72534 10.5505 4.5087 10.9377 5.04729L13.4776 8.52307C13.603 8.68917 13.7882 8.79609 13.9948 8.8217L18.2749 9.28342C18.9312 9.35586 19.1717 10.1929 18.6486 10.5975L9.19484 17.9023C8.67811 18.3107 7.92459 17.8757 8.01348 17.2203Z"
                    fill="#E7E7EB"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_98">
                    <rect
                      width="17.6966"
                      height="17.6966"
                      fill="white"
                      transform="translate(15.6997 24.7079) rotate(-150)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <p className="tracking-wider">WSW</p>
        </div>
      </div>
      <div className="my-auto flex  flex-col justify-around bg-color-summarycard h-52 ">
        <p className=" text-lg">Humidity</p>
        <p className=" font-bold text-7xl">{main.humidity}%</p>
        <div className="flex justify-center items-center">
        <BarraPorcentaje porcentaje={main.humidity} />
        </div>
      </div>

      <div className="my-auto  flex  flex-col justify-evenly bg-color-summarycard h-52 ">
        <p className="text-lg">Visibility: </p>
        <p className="  font-bold text-7xl">{wind.gust} miles</p>
      </div>
      <div className="my-auto flex  flex-col justify-evenly bg-color-summarycard h-52 ">
        <p className=" text-lg">Air Pressure:</p>
        <p className="  font-bold text-7xl">{main.pressure} mb</p>
      </div>
    </div>
  );
}

export default DetailCard;
