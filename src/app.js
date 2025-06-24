import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("erro de conexão: ", erro);
});

conexao.once("open", () => {
    console.log("Conexão feita com sucesso");
})

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

function buscaLivros(id) {
    return livros.findIndex(livros => {
        return livros.id == Number(id);
    })
};

//METODOS GETS
app.get("/", (req, res) => {
    res.status(200).send("Curso de node.js");
});
app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});
app.get("/livros/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    res.status(200).json(livros[index]);
});

//METODOS POSTS 
app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send(`Livro adicionado com sucesso!`);
});

//METODOS POST
app.put("/livros/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});

//METODOS DELETE
app.delete("/livros/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro deletado com sucesso");
});

export default app;


