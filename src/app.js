import express from "express";

const app = express();
app.use(express.json());
const livros = [
  {
    id: 1,
    titulo: "Senhor dos anéis",
  },
  {
    id: 2,
    titulo: "O Hobbit",
  },
];

//METODOS GETS
app.get("/", (req, res) => {
  res.status(200).send("Curso de node.js");
});
app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

//METODOS POSTS 
app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send(`Livro adicionado com sucesso!`);
});




export default app;
