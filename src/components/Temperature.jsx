function IconWeather({ data }) {
  const { main } = data.list[0];
  return (
    <>
      <p className="font-medium text-9xl text-white">
        {Math.round(main.temp)}&deg;c
      </p>
    </>
  );
}

export default IconWeather;
