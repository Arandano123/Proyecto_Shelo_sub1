function Tarjeta({ nombre, categoria, descripcion, precio, existencia, emoji }) {
  const hayExistencia = existencia > 0;

  return (
    <article className="tarjeta-producto">
      <div className="emoji-producto" aria-hidden="true">
        {emoji}
      </div>

      <h3>{nombre}</h3>
      <p className="categoria">{categoria}</p>
      <p className="descripcion">{descripcion}</p>
      <p className="precio">${precio.toFixed(2)}</p>

      <button
        className={`boton-carrito ${
          hayExistencia ? "disponible" : "no-disponible"
        }`}
        disabled={!hayExistencia}
      >
        {hayExistencia ? "Agregar al carrito" : "Agotado"}
      </button>
    </article>
  );
}

export default Tarjeta;