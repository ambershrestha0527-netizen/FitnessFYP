const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey =
  process.env.REACT_APP_GEMINI_API_KEY ;


const genAI = new GoogleGenerativeAI(apiKey);

const MODEL_CANDIDATES = [
  "gemini-3.8-flash",
  "gemini-flash-latest",
  "gemini-3.5-flash",
  "gemini-flash-lite-latest",
  "gemini-3.1-flash-lite",
];

export const generateContent = async (prompt) => {
  let lastError = null;

  for (const modelName of MODEL_CANDIDATES) {
    try {
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent(prompt);
      const text = result.response.text();
      return text;
    } catch (err) {
      console.warn(`Model ${modelName} in frontend failed, trying next candidate:`, err.message);
      lastError = err;
    }
  }

  console.error("All frontend Gemini model candidates failed:", lastError);
  throw lastError || new Error("Failed to generate response");
};

