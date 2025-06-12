// import http from 'http';

import app from './src/app.js';


const PORT = 3000;



// const rotas = {
//     "/": "curso de rotas em node.js",
//     "/livros": "rotas livros",
//     "/autores": "rotas autores",
// };

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end(rotas[req.url]);     
// });



app.listen(PORT, () => {
    console.log(`Servidor escutando, na porta ${PORT}!`);
});