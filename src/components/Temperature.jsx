function Temperature({ data }) {
  if (!data || !data.list || data.list.length === 0) {
    // Si no hay datos disponibles, puedes mostrar un mensaje o retornar null
    return null;
  }

  const { main } = data.list[0];
  return (
    <>
      <p className="font-medium text-9xl text-white">
        {Math.round(main.temp)}&deg;c
      </p>
    </>
  );
}

export default Temperature;
