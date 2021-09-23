const User = require('../models/user');

exports.getUser = (req, res) => {
  User.getUsers((error, output) => {
    if (error) {
      res.status(500).send({
        message: "Internal Server Error"
      })
    }
    else {
      res.send(output);
    }
  })
};

exports.createUser = (req, res) => {
  
  if (!req.body) {
    res.status(400).send({ message: "Bad Request" });
  }
  const newUser = new User({
    name: req.body.name
  })
  User.createUser(newUser, (error, output) => {
    if (error) {
      res.status(500).send({
        message: "Internal Server Error"
      })
    }
    else {
      res.send(output);
    }
  })
}