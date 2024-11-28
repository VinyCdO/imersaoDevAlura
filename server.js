import express from "express";
import routes from "./src/routes/postRoutes.js";

// Cria uma instância do servidor Express
const app = express();
app.use(express.static("uploads"));
routes(app);

// Inicia o servidor na porta 3000 e exibe uma mensagem no console
app.listen(80, () => {
  console.log("Servidor escutando...");
});
