import "dotenv/config";
import readline from "readline";
import { ChatMistralAI } from "@langchain/mistralai";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


const model = new ChatMistralAI({
    model: "mistral-small-latest",
    apiKey: process.env.MISTRAL_API_KEY
});

const response = await model.invoke("Hello, how are you? under 10 words");
console.log(response.text);