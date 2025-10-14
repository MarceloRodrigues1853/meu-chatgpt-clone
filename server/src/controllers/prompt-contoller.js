// 1. Importa o novo helper da Groq
const AIProvider = require("../config/ai-provider");

module.exports = {
  async sendText(req, res) {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        error: "O campo 'prompt' é obrigatório."
      });
    }

    try {
      // 2. Chama o método do nosso novo helper
      const response = await AIProvider.generateContent(prompt);

      // Verifica se a resposta não foi nula (em caso de erro na API)
      if (response === null) {
        throw new Error("A API não retornou uma resposta.");
      }

      return res.status(200).json({
        success: true,
        data: response, // A resposta já é o texto final
      });

    } catch (error) {
      console.error("Erro no controller:", error);
      return res.status(500).json({
        success: false,
        error: "Ocorreu um erro no servidor ao processar a solicitação."
      });
    }
  }
};