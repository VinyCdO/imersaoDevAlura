import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Gato adorável se espreguiçando",
        imagem: "https://placekitten.com/400/300"
    },
    {
        id: 3,
        descricao: "Paisagem incrível com um gato",
        imagem: "https://picsum.photos/id/237/400/300"
    },
    {
        id: 4,
        descricao: "Gato brincando com um novelo de lã",
        imagem: "https://loremflickr.com/400/300/kitten"
    },
    {
        id: 5,
        descricao: "Gatinho curioso olhando pela janela",
        imagem: "https://source.unsplash.com/random/400x300/?cat"
    },
    {
        id: 6,
        descricao: "Gato ronronando no colo",
        imagem: "https.//placeimg.com/400/300/animals"
    },
    {
        id: 7,
        descricao: "Gato preto fazendo pose",
        imagem: "https://unsplash.it/400/300/?random"
    }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

function buscarPostPorID(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id)
  })
};

app.get("/posts/:id", (req, res) => {
  const index = buscarPostPorID(req.params.id);

  if (index == -1) {
    res.status(400).send("Post não encontrado!");
  } else {
    res.status(200).json(posts[index]);
  }
});