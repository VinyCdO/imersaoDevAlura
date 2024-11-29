import express from "express";
import multer from "multer";
import cors from "cors";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost, deletarPost } from "../controllers/postsController.js";

const corsOptions = {
  origin: "http://localhost:8000",
  optionsSuccessStatus: 200
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({dest:"./uploads", storage});

const routes = (app) => {
  // Permite que o servidor receba dados no formato JSON
  app.use(express.json());

  app.use(cors(corsOptions));
  
  // Rota GET para buscar todos os posts
  app.get("/posts", listarPosts);
  app.post("/posts", postarNovoPost);
  app.post("/upload", upload.single("imagem"), uploadImagem);
  app.put("/upload/:id", atualizarNovoPost);
  app.post("/delete/:id", deletarPost);
}

export default routes;