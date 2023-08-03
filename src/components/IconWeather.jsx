function IconWeather({ weather_icon }) {
  return (
    <>
      <p className="text-4xl text-pink-800 tracking-widest">
        <img src={`src/assets/${weather_icon}`} className=" inline w-80" />
        {/* <img src="src/assets/Cloud-background.png" alt="not found" className="inline w-80 bg-black text-black bg-opacity-10" /> */}
        
      </p>
 
    </>
  );
}

export default IconWeather;
