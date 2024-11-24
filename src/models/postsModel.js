import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbconfig.js";

// Conecta ao banco de dados MongoDB e retorna uma promessa
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para buscar todos os posts de uma coleção específica
export async function getTodosPosts() {
  // Seleciona o banco de dados 'imersao-instabytes'
  const db = conexao.db("imersao-instabytes");

  // Seleciona a coleção 'posts' dentro do banco de dados
  const colecao = db.collection("posts");

  // Retorna um array com todos os documentos da coleção
  return colecao.find().toArray();
}

export async function criarPost(novoPost) {
  // Seleciona o banco de dados 'imersao-instabytes'
  const db = conexao.db("imersao-instabytes");

  // Seleciona a coleção 'posts' dentro do banco de dados
  const colecao = db.collection("posts");

  return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, post) {
  // Seleciona o banco de dados 'imersao-instabytes'
  const db = conexao.db("imersao-instabytes");

  // Seleciona a coleção 'posts' dentro do banco de dados
  const colecao = db.collection("posts");

  const objId = ObjectId.createFromHexString(id);
  
  return colecao.updateOne({_id: new ObjectId(objId)}, {$set:post});
}