// ...instale express e mysql2...
const express = require('express');
const mysql = require('mysql2');
const app = express();
const cors = require('cors');
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sua_senha',
  database: 'seu_banco'
});

app.get('/itens', (req, res) => {
  const search = req.query.q;
  let sql = 'SELECT * FROM itens';
  if (search) {
    sql += ' WHERE titulo LIKE ? OR resumo LIKE ? OR categoria LIKE ?';
    db.query(sql, [`%${search}%`, `%${search}%`, `%${search}%`], (err, results) => {
      if (err) return res.status(500).json({error: err});
      res.json(results);
    });
  } else {
    db.query(sql, (err, results) => {
      if (err) return res.status(500).json({error: err});
      res.json(results);
    });
  }
});

app.listen(3000, () => console.log('API rodando na porta 3000'));