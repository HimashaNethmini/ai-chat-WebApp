//initializing the model
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable 
const genAI = new GoogleGenerativeAI(process.env.VITE_GEMINI_PUBLIC_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});