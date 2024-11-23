import express from "express";
import { listarPosts, postarNovoPost } from "../controllers/postsController.js";

const routes = (app) => {
  // Permite que o servidor receba dados no formato JSON
  app.use(express.json());

  // Rota GET para buscar todos os posts
  app.get("/posts", listarPosts);
  app.post("/posts", postarNovoPost);
}

export default routes;