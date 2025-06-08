import React from "react";

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Panel de Control de IA</h1>
      <p>Bienvenido, Alvaro 👋</p>

      <div style={{ marginTop: "1rem" }}>
        <button onClick={() => alert("Ejecutando instrucción AI...")}>
          Ejecutar tarea automática
        </button>
      </div>
    </div>
  );
}

export default App;
