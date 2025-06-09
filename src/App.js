import React from "react";
import FutureFX41Chat from "./components/FutureFX41Chat"; // ← Asegúrate de esta línea

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Panel de Control de IA</h1>
      <p className="mb-6">Bienvenido, Alvaro 👋</p>

      {/* Aquí cargamos el chat de IA */}
      <FutureFX41Chat />
    </div>
  );
}

export default App;
