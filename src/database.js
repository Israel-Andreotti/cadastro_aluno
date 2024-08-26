const { Client } = require('pg');

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "123456",
  database: "Escola"
});

client.connect()
  .then(() => console.log("Conectado ao banco de dados..."))
  .catch(err => console.error("Erro ao conectar ao banco de dados", err));

module.exports = client;
