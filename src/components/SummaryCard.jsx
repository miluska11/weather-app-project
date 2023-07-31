import moment from "moment";

function SummaryCard({ day }) {
  let day_icon = `${
    import.meta.env.VITE_APP_ICON_URL + day.weather[0]["icon"]
  }@2x.png`;
  return (
    <li className="p-4 flex h-44  max-[1003px]:h-56 container h-64 justify-center text-center bg-color-summarycard my-auto ">
      <div className="my-auto">
        <p className="tracking-wider ">{moment().format("dddd D MMM")}</p>

        <p className="text-2xl tracking-widest">
          <img src={day_icon} className=" inline w-16 " />
        </p>
        <div className="flex justify-around">
          <p className="font-medium text-base  mb-2">
            {Math.round(day.main.temp_max)}&deg;C
          </p>
          <p className="font-medium  bg-color-text-mintemp mb-2">
            {Math.round(day.main.temp_min)}&deg;C
          </p>
        </div>
      </div>
    </li>
  );
}

export default SummaryCard;
