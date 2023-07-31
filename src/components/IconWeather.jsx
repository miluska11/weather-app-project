function IconWeather({ weather_icon }) {

  return (
    <>
      <p className="text-4xl text-pink-800 tracking-widest">
        <img src={weather_icon} className=" inline w-80" />
      </p>
 
    </>
  );
}

export default IconWeather;
