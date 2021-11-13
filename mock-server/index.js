const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.options('*', cors());
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());

const PORT = 9000;

const get_gastos_mes = require('./mocks/get_gastos_mes_200.json');

app.get('/gastos', (req, res) => {
  res.send(get_gastos_mes);
});

app.post('/gastos', (req, res) => {
  const newExpense = req.body;
  res.send({...newExpense, persona: 'YEP'});
});

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});