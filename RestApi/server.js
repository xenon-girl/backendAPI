const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const route = require('./routes/routers');
const users = require('./controller/controller');
app.use(bodyParser.json());

// app.use(bodyParser.urlencoded)

app.get('/', (req, res) => {
  res.json({ "Got user": "User Fetched from DB" });
});

// app.get('/getUser', route);
app.get('/getUser', users.getUser);

app.post('/createUser', users.createUser);

app.listen(3000, () => {
  console.log("Server Up");
})

