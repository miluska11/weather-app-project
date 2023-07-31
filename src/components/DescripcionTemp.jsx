function DescripcionTemp({ data }) {
  const { weather } = data.list[0];
  return (
    <>
      <p className=" text-4xl uppercase tracking-widest font-semibold text-color-description">
        {weather[0].description}
      </p>
    </>
  );
}

export default DescripcionTemp;
