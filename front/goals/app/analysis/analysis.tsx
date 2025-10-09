import { useLocation } from "react-router";

export default function Analysis() {
  const location = useLocation();
  const { equipoId, equipoNombre } = location.state || {};

  if (!equipoId || !equipoNombre) {
    return <p>No se ha recibido información del equipo.</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-semibold text-gray-700">
        Análisis del equipo: {equipoNombre}
      </h1>
      <p className="text-2xl text-gray-500 mt-4">ID: {equipoId}</p>
    </div>
  );
}