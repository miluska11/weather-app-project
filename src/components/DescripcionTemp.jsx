function DescripcionTemp({ data }) {
  if (!data || !data.list || data.list.length === 0) {
    // Si no hay datos disponibles, puedes mostrar un mensaje o retornar null
    return null;
  }

  const { weather } = data.list[0];
  if (!weather || weather.length === 0) {
    // Si no hay datos de clima disponibles, puedes mostrar un mensaje o retornar null
    return null;
  }

  return (
    <>
      <p className="text-4xl uppercase tracking-widest font-semibold text-color-description">
        {weather[0].description}
      </p>
    </>
  );
}

export default DescripcionTemp;
