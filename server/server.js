const express = require('express');
const app = express();
const servlet = require('./servlet');
const mysql = require('mysql');
const mySqlConfig = require('./dbConfig');

const connection = mysql.createConnection({
  host: mySqlConfig.HOST,
  user: mySqlConfig.USER,
  password: mySqlConfig.PASSWORD,
  database: mySqlConfig.DB
});

connection.connect((error, result) => {
  if (error) {
    throw error;
  }
  console.log("Connected to DB");
});
app.use(express.json());
app.get('/', (req, res) => {
  res.send(res.json({ message: 'Welcome' }));
  console.log("Welcome");
});

app.get('/user', servlet.getUser(connection));

app.post('/user', servlet.createUser(connection));

app.listen(3000, () => {
  console.log("Server Up");
})