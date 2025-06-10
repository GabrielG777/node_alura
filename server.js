import http from 'http';

const PORT = 3000;

const rotas = {
    "/": "curso de node",
    "/livro": "rota livros",
    "/autor": "rota autor",
};

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.end('Hello, Word!\n');
    res.end(rotas[req.url]);
});

server.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}!`)
});