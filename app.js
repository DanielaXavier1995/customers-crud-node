//Chamando o express
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Meu primeiro Servidor</h1>");
});

//Inicializar o servidor na porta 3000
app.listen(3000, () => {
  console.log("Servidor Inicializado");
});
