import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_KEY, // Usa variable segura
  dangerouslyAllowBrowser: true, // Necesario solo en desarrollo frontend
});

export default openai;
