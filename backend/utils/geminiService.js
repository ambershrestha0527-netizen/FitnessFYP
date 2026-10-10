// utils/geminiService.js
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const apiKey =
  process.env.GEMINI_API_KEY ||
  process.env.REACT_APP_GEMINI_API_KEY ;
  

const genAI = new GoogleGenerativeAI(apiKey);
// Priority model list of verified active & ready models
const MODEL_CANDIDATES = [
  "gemini-3.8-flash",
  "gemini-flash-latest",
  "gemini-3.5-flash",
  "gemini-flash-lite-latest",
  "gemini-3.1-flash-lite",
];

/**
 * Generate content using Google's Gemini AI model with fallback to available flash models
 * @param {string} prompt - The prompt to send to Gemini
 * @returns {Promise<string>} - The generated text response
 */
export const generateContent = async (prompt) => {
  let lastError = null;

  for (const modelName of MODEL_CANDIDATES) {
    try {
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent(prompt);
      const response = result.response.text();
      if (response) {
        return response;
      }
    } catch (error) {
      console.warn(`Gemini model ${modelName} failed, trying next candidate if available:`, error.message);
      lastError = error;
    }
  }

  console.error("All Gemini model candidates failed:", lastError);
  throw new Error("Failed to generate content from AI");
};

/**
 * Helper to reliably parse JSON response from Gemini
 * Handles markdown code fences (```json ... ```) and leading/trailing explanatory text
 * @param {string} text - The raw text response from Gemini
 * @returns {any} - Parsed JSON object
 */
export const parseGeminiJsonResponse = (text) => {
  if (!text || typeof text !== "string") {
    throw new Error("Empty or invalid response from AI");
  }

  // 1. Strip markdown fences like ```json and ```
  const stripped = text
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();

  // Try direct parse first
  try {
    return JSON.parse(stripped);
  } catch (err) {
    // 2. Extract first outer JSON object {...} or array [...]
    const jsonObjectMatch = text.match(/\{[\s\S]*\}/);
    if (jsonObjectMatch) {
      try {
        return JSON.parse(jsonObjectMatch[0]);
      } catch (innerErr) {
        // Continue
      }
    }

    const jsonArrayMatch = text.match(/\[[\s\S]*\]/);
    if (jsonArrayMatch) {
      try {
        return JSON.parse(jsonArrayMatch[0]);
      } catch (innerErr) {
        // Continue
      }
    }

    throw new Error("Could not extract valid JSON from AI response");
  }
};

