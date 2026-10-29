import { useState } from "react";
import "./App.css";
import Tarjeta from "./components/Tarjeta";

const productos = [
  {
    id: 1,
    nombre: "Labial mate",
    emoji: "💄",
    categoria: "Maquillaje",
    descripcion: "Labial de acabado mate y larga duración",
    precio: 120.0,
    existencia: 10,
  },
  {
    id: 2,
    nombre: "Máscara para pestañas",
    emoji: "👁️",
    categoria: "Maquillaje",
    descripcion: "Máscara para dar volumen y definición",
    precio: 145.0,
    existencia: 8,
  },
  {
    id: 3,
    nombre: "Base de maquillaje",
    emoji: "🧴",
    categoria: "Maquillaje",
    descripcion: "Base ligera para unificar el tono de la piel",
    precio: 230.0,
    existencia: 6,
  },
  {
    id: 4,
    nombre: "Rubor compacto",
    emoji: "🌸",
    categoria: "Maquillaje",
    descripcion: "Rubor en polvo con un tono natural",
    precio: 135.0,
    existencia: 0,
  },
  {
    id: 5,
    nombre: "Delineador líquido",
    emoji: "✏️",
    categoria: "Maquillaje",
    descripcion: "Delineador de punta fina y secado rápido",
    precio: 110.0,
    existencia: 12,
  },
  {
    id: 6,
    nombre: "Polvo traslúcido",
    emoji: "✨",
    categoria: "Maquillaje",
    descripcion: "Polvo ligero para sellar el maquillaje",
    precio: 175.0,
    existencia: 7,
  },
  {
    id: 7,
    nombre: "Crema hidratante",
    emoji: "🧴",
    categoria: "Cuidado de la piel",
    descripcion: "Crema facial para hidratar la piel diariamente",
    precio: 190.0,
    existencia: 9,
  },
  {
    id: 8,
    nombre: "Protector solar",
    emoji: "☀️",
    categoria: "Cuidado de la piel",
    descripcion: "Protector solar facial de uso diario",
    precio: 250.0,
    existencia: 15,
  },
  {
    id: 9,
    nombre: "Limpiador facial",
    emoji: "🫧",
    categoria: "Cuidado de la piel",
    descripcion: "Limpiador suave para retirar impurezas",
    precio: 160.0,
    existencia: 11,
  },
  {
    id: 10,
    nombre: "Agua micelar",
    emoji: "💧",
    categoria: "Cuidado de la piel",
    descripcion: "Agua micelar para limpiar y desmaquillar el rostro",
    precio: 140.0,
    existencia: 5,
  },
  {
    id: 11,
    nombre: "Shampoo nutritivo",
    emoji: "🧴",
    categoria: "Cuidado del cabello",
    descripcion: "Shampoo para limpiar y nutrir el cabello",
    precio: 180.0,
    existencia: 13,
  },
  {
    id: 12,
    nombre: "Acondicionador",
    emoji: "🫧",
    categoria: "Cuidado del cabello",
    descripcion: "Acondicionador para suavizar y desenredar el cabello",
    precio: 170.0,
    existencia: 10,
  },
  {
    id: 13,
    nombre: "Mascarilla capilar",
    emoji: "🧖‍♀️",
    categoria: "Cuidado del cabello",
    descripcion: "Tratamiento hidratante para el cabello",
    precio: 210.0,
    existencia: 4,
  },
  {
    id: 14,
    nombre: "Esmalte para uñas",
    emoji: "💅",
    categoria: "Uñas",
    descripcion: "Esmalte de color con acabado brillante",
    precio: 65.0,
    existencia: 20,
  },
  {
    id: 15,
    nombre: "Crema para manos",
    emoji: "🤲",
    categoria: "Cuidado personal",
    descripcion: "Crema humectante para manos de uso diario",
    precio: 95.0,
    existencia: 14,
  },
];

function Encabezado() {
  return (
    <header className="encabezado">
      <h1>Shelo</h1>
      <p>Bienvenido a Shelo, tu tienda de productos de belleza</p>
    </header>
  );
}

function App() {
  const [busqueda, setBusqueda] = useState("");

  const productosFiltrados = productos.filter((producto) => {
    const texto = busqueda.toLowerCase();

    return (
      producto.nombre.toLowerCase().includes(texto) ||
      producto.categoria.toLowerCase().includes(texto) ||
      producto.descripcion.toLowerCase().includes(texto)
    );
  });

  return (
    <main className="contenedor">
      <Encabezado />

      <section className="productos">
        <div className="productos-titulo">
          <h2>Productos de belleza</h2>

          <input
            type="search"
            placeholder="Buscar productos..."
            value={busqueda}
            onChange={(evento) => setBusqueda(evento.target.value)}
            aria-label="Buscar productos"
          />
        </div>

        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((producto) => (
            <Tarjeta
              key={producto.id}
              nombre={producto.nombre}
              categoria={producto.categoria}
              descripcion={producto.descripcion}
              precio={producto.precio}
              existencia={producto.existencia}
              emoji={producto.emoji}
            />
          ))
        ) : (
          <p className="sin-resultados">No se encontraron productos.</p>
        )}
      </section>
    </main>
  );
}

export default App;