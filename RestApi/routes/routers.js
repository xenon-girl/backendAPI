module.exports = (app) => {
  const users = require('../controller/controller');
  app.get('/getUser', users.getUser);
}

