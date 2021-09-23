const useModule = require('./module');

module.exports = {

  getUser: (sqlInstance) => {
    return function (req, res) {
      try {
        useModule.getUser(sqlInstance, (error, output) => {
          if (error) {
            res.status(500).send({
              message: "Internal Server Error"
            })
          }
          else {
            res.send(output);
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
  },

  createUser: (sqlInstance) => {
    return function (req, res) {
      try {
        let data = req.body;
        if (!data) {
          res.status(400).send({ message: "Bad request" });
        }
        useModule.createUser(sqlInstance, data,
          (error, output) => {
          if (error) {
            res.status(500).send({
              message: "Internal Server Error"
            })
          }
          else {
            res.send(
              { message: "Successfully created UserId: " + output.insertId });
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
}