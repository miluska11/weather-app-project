import { useState } from "react";
import DetailCard from "./components/DetailCard";
import IconHeader from "./components/IconHeader";
import SummaryCard from "./components/SummaryCard";
import IconWeather from "./components/IconWeather";
import Temperature from "./components/Temperature";
import DescripcionTemp from "./components/DescripcionTemp";
import { SideBarSearch } from "./components/SideBarSearch";
import moment from "moment";
function App() {
  const API_KEY = import.meta.env.VITE_REACT_API_KEY;

  const [noData, setNoData] = useState("No Data");
  const [searchTerm, setSearchTerm] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [open, setOpen] = useState(false);
  const [city, setCity] = useState("Unknown location");
  const [weatherIcon, setWeatherIcon] = useState(
    `${import.meta.env.VITE_APP_ICON_URL}10n@2x.png`
  );
  const handleClick = () => {
    setOpen();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(searchTerm);
  };
  const handlePosition = () => {
    getWeather("lima");
  };
  const handleChange = (input) => {
    const { value } = input.target;
    setSearchTerm(value);
  };

  const getWeather = async (location) => {
    setWeatherData([]);
    let how_to_search =
      typeof location === "string"
        ? `q=${location}`
        : `lat=${location[0]}&lon=${location[1]}`;
    console.log(how_to_search);
    try {
      let res = await fetch(`${
        import.meta.env.VITE_REACT_APP_URL + how_to_search
      }
      &appid=${API_KEY}&units=metric&cnt=5&exclude=hourly,minutely`);
      let data = await res.json();

      if (data.cod != 200) {
        setNoData("Location Not Found");
        return;
      }
      setWeatherData(data);
      setCity(`${data.city.name}, ${data.city.country}`);
      setWeatherIcon(
        `${
          import.meta.env.VITE_APP_ICON_URL + data.list[0].weather[0]["icon"]
        }@4x.png`
      );
    } catch (error) {
      console.log(error);
    }
  };

  const myIP = async (location) => {
    console.log(location);
    const { latitude, longitude } = location.coords;
    const apiKey = import.meta.env.VITE_API_KEY_MAP;
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${apiKey}`;
    const res = await fetch(url);
    const data = await res.json();
    const ciudad = data.features[0].context.find((item) =>
      item.id.includes("place")
    ).text;
    getWeather(ciudad);
  };

  return (
    <div className="flex max-[2006px]:flex max-[1003px]:flex-col">
      {/* form card section  */}
      <SideBarSearch
        open={open}
        handleClick={handleClick}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <div className="form-container flex max-[1003px]:w-full flex-col  w-101 h-screen w-1/4 py-20 px-10 ">
        <div className="flex items-center justify-center">
          <button
            className="my-auto mr-auto text-xl text-white font-medium shadow-md py-1 px-3 
         bg-white bg-opacity-30"
            onClick={() => setOpen(true)}
          >
            Seach for places
          </button>
          <div
            className="  bg-opacity-30 "
            // onClick={() => {
            //   handlePosition();
            // }}
            onClick={() => {
              navigator.geolocation.getCurrentPosition(myIP);
            }}
          >
            <button
              className=" cursor-pointer items-center  rounded-full w-12 h-12 text-center bg-gray-600"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="47"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_1_29)">
                  <path
                    d="M12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8ZM20.94 11C20.48 6.83 17.17 3.52 13 3.06V2C13 1.45 12.55 1 12 1C11.45 1 11 1.45 11 2V3.06C6.83 3.52 3.52 6.83 3.06 11H2C1.45 11 1 11.45 1 12C1 12.55 1.45 13 2 13H3.06C3.52 17.17 6.83 20.48 11 20.94V22C11 22.55 11.45 23 12 23C12.55 23 13 22.55 13 22V20.94C17.17 20.48 20.48 17.17 20.94 13H22C22.55 13 23 12.55 23 12C23 11.45 22.55 11 22 11H20.94ZM12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19Z"
                    fill="#E7E7EB"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_29">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
        {/* ICON */}
        <div className="text-center my-auto">
          {weatherData.length === 0 ? (
            <div className="container p-4 flex items-center justify-center h-1/3 mb-auto">
              <h1 className="text-gray-300 text-4xl font-bold uppercase">
                {noData}
              </h1>
            </div>
          ) : (
            <>
              <IconWeather weather_icon={weatherIcon} data={weatherData} />
            </>
          )}
        </div>
        {/* temperatura */}
        <div className="text-center my-auto">
          {weatherData.length === 0 ? (
            <div className="container p-4 flex items-center justify-center h-1/3 mb-auto">
              <h1 className="text-gray-300 text-4xl font-bold uppercase">
                {noData}
              </h1>
            </div>
          ) : (
            <>
              <Temperature weather_icon={weatherIcon} data={weatherData} />
            </>
          )}
        </div>
        {/* descripcion */}
        <div className="text-center my-auto">
          {weatherData.length === 0 ? (
            <div className="container p-4 flex items-center justify-center h-1/3 mb-auto">
              <h1 className="text-gray-300 text-4xl font-bold uppercase">
                {noData}
              </h1>
            </div>
          ) : (
            <>
              <DescripcionTemp weather_icon={weatherIcon} data={weatherData} />
            </>
          )}
        </div>
        <div className="flex flex-col items-center justify-center"></div>
        <div className="flex flex-col text-items-lower">
          <div className="flex justify-center ">
            <p className=" text-sm">Today</p>
            <div className="w-3.5 h-3.5 flex justify-center items-center ">
              <p className="tex-center text-sm">.</p>
            </div>
            <p className="tracking-wider text-sm">
              {moment().format("dddd D MMM")}
            </p>
          </div>
          <div className="mt-5">
            <p className=" text-sm flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_1_17)">
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9C5 13.17 9.42 18.92 11.24 21.11C11.64 21.59 12.37 21.59 12.77 21.11C14.58 18.92 19 13.17 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                    fill="#88869D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_17">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              {city}
            </p>
          </div>
        </div>
      </div>
      {/* info card section  */}
      <div className="w-3/4 flex flex-col max-[1003px]:w-full max-[1003px]:px-8 max-[1003px]:py-2 min-[1003px]:h-screen justify-between px-40 py-16 bg-color-total-info  bg-color-card-info w">
        <IconHeader />
        <div className="flex flex-col my-10">
          {/* card jsx  */}
          {weatherData.length === 0 ? (
            <div className="container p-4 flex items-center justify-center h-1/3 mb-auto">
              <h1 className=" text-4xl font-bold uppercase">{noData}</h1>
            </div>
          ) : (
            <>
              <ul className="grid grid-cols-5  max-[1003px]:px-8 max-[1003px]:grid-cols-2 gap-4">
                {weatherData.list.map((days, index) => {
                  return <SummaryCard key={index} day={days} />;
                })}
              </ul>

              <h1 className="font-bold flex text-2xl max-[1003px]:mt-11 mt-40 mb-8 max-[1080px]:mt-20">
                Today’s Hightlights
              </h1>
              <DetailCard weather_icon={weatherIcon} data={weatherData} />
            </>
          )}
        </div>
        <footer className="font-bold text-2xl creation-footer  text-center">
          created by username - devChallenges.io
        </footer>
      </div>
    </div>
  );
}

export default App;
