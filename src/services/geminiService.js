// Importa a classe para interagir com a API do Google Generative AI
import { GoogleGenerativeAI } from "@google/generative-ai";

// Cria uma nova instância da API e carrega o modelo Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Função principal para gerar o alt text
export default async function gerarDescricaoComGemini(imageBuffer) {
  // Prompt para o modelo
  const prompt = "Gere uma descrição em português do Brasil para a seguinte imagem";

  try {
    // Prepara a imagem para o modelo
    const image = {
      inlineData: {
        data: imageBuffer.toString("base64"),
        mimeType: "image/png",
      },
    };

    // Envia o prompt e a imagem para o modelo e aguarda a resposta
    const res = await model.generateContent([prompt, image]);

    // Retorna o alt text gerado
    return res.response.text() || "Alt-text não disponível.";
  } catch (error) {
    // Caso ocorra algum erro, imprime uma mensagem de erro no console e lança uma exceção
    console.error("Erro ao obter alt-text:", error.message, error);
    throw new Error("Erro ao obter o alt-text do Gemini.");
  }
}