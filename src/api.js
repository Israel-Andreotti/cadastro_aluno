const client = require('./database');
const express = require('express');

const app = express();

let port = 3300;

app.listen(port, () => {
  console.log(`Server tá on na porta ${port}`);
});

// Get request
app.get('/alunos', (req, res) => {
  client.query('SELECT * FROM alunos', (err, result) => {
    if (err) {
      console.error('Erro ao consultar o banco de dados', err);
      res.status(500).send('Erro ao consultar o banco de dados');
    } else {
      res.send(result.rows);
    }
  });
});

app.get('./alunos', (req, res) => {
  client.query(`SELECT * FROM alunos WHERE name=${req.params.name}`, (err, result) => {
    if (err) {
      console.error("Erro ao buscar informações no banco", err);
      res.status(500).send('Erro ao consultar banco de dados');
    } else {
      res.send(result.rows)
    }
  })
})

app.post('./alunos', (req, res) => {
  const user = req.body;
  let insertQuery = `INSERT INTO ALUNOS (nome, idade, mes_nascimento, ano_nascimento) VALUES(${user.name}, ${user.idade}, ${user.mes_nascimento}, ${user.ano_nascimento})`

  client.query(insertQuery, (err, result) => {
    if (err) {
      console.log(err.message);
    } else {
      res.send('Adicionado com sucesso')
    }
  })
})
