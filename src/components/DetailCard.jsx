function DetailCard({ data }) {
  const { main, wind } = data.list[0];
  return (
    <div className="container max-[1003px]:grid-cols-1 justify-center text-center grid gap-5 grid-cols-2 shadow-md mb-auto">
      <div className="my-auto flex  flex-col justify-around bg-color-summarycard h-52">
        <p className=" text-lg">Wind status</p>
        <p className=" font-bold text-6xl">{Math.round(wind.speed)}mph</p>
        <p className="tracking-wider">WSW</p>
      </div>
      <div className="my-auto flex  flex-col justify-around bg-color-summarycard h-52 ">
        <p className=" text-lg">Humidity</p>
        <p className=" font-bold text-6xl">{main.humidity}%</p>
        <p className="tracking-wider">barra</p>
      </div>

      <div className="my-auto  flex  flex-col justify-evenly bg-color-summarycard h-52 ">
        <p className="text-lg">Visibility: </p>
        <p className="  font-bold text-6xl">{wind.gust} miles</p>
      </div>
      <div className="my-auto flex  flex-col justify-evenly bg-color-summarycard h-52 ">
        <p className=" text-lg">Air Pressure:</p>
        <p className="  font-bold text-6xl">{main.pressure} mb</p>
      </div>
    </div>
  );
}

export default DetailCard;
