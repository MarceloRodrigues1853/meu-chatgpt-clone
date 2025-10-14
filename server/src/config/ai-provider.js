require("dotenv").config();

// Pega a chave da Groq do arquivo .env
const API_KEY = process.env.GROQ_API_KEY;

// Endereço da API da Groq
const API_URL = "https://api.groq.com/openai/v1/chat/completions";

class AIProvider {
  static async generateContent(prompt) {
    console.log("Executando chamada para a API da Groq...");

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "messages": [
            {
              "role": "user",
              "content": prompt
            }
          ],
          // CORREÇÃO: Usando o modelo recomendado pela documentação
          "model": "llama-3.1-8b-instant" 
        })
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("A API da Groq retornou um erro:", JSON.stringify(data, null, 2));
        return null;
      }

      return data.choices[0].message.content;

    } catch (error) {
      console.error("Erro crítico ao tentar a chamada para a Groq:", error);
      return null;
    }
  }
}

module.exports = AIProvider;