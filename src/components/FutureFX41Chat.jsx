import React, { useState } from "react";

const FutureFX41Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage = { user: "Alvaro", text: input };
    setMessages([...messages, newMessage]);
    setInput("");
    // Aquí irá la conexión con la IA para generar respuesta y código
  };

  return (
    <div className="p-4 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-2">🤖 Chat IA - FutureFX41</h2>
      <div className="h-60 overflow-y-auto border p-2 mb-2">
        {messages.map((msg, idx) => (
          <div key={idx} className="mb-1">
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <input
        className="w-full border px-2 py-1 mb-2"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe una orden..."
      />
      <button
        onClick={handleSend}
        className="bg-blue-600 text-white px-4 py-1 rounded"
      >
        Enviar
      </button>
    </div>
  );
};

export default FutureFX41Chat;
