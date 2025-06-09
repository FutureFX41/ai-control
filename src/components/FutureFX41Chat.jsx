import React, { useState } from "react";
import openai from "../openai";

function FutureFX41Chat() {
  const [response, setResponse] = useState("");

  const handleClick = async () => {
    const res = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: "Genera una tarea automática para mí" }],
    });

    setResponse(res.choices[0].message.content);
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <button
        onClick={handleClick}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Ejecutar tarea automática
      </button>

      {response && (
        <div className="mt-4 bg-gray-100 p-3 rounded text-gray-800 whitespace-pre-wrap">
          {response}
        </div>
      )}
    </div>
  );
}

export default FutureFX41Chat;

