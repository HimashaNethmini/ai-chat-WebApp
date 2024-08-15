//initializing the model
import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

//added safety settings to limit the responses
const safetySettig = [
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
    }
]

// Access your API key as an environment variable 
const genAI = new GoogleGenerativeAI(process.env.VITE_GEMINI_PUBLIC_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

export default model;