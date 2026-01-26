import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants.js';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

let chatSession = null;

export const getChatSession = () => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message) => {
  try {
    const chat = getChatSession();
    const result = await chat.sendMessage({ message });
    return result.text || "I'm focusing on a design detail right now, could you ask that again?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Unable to connect to the AI assistant.");
  }
};