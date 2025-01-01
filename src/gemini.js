/* eslint-disable no-unused-vars */
let apikey = "AIzaSyACQhmUR3nhfQVH1k46fjlPZ2XlLq6aex0"


import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  

  const genAI = new GoogleGenerativeAI(apikey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 20,
    maxOutputTokens: 40,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {                         //prompt passesd as a parameter 
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);             // receives the prompt to show in the console
    return result.response.text()
  }
  
 export default run