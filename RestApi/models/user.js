const sql = require('./dbConnect');

const User = function (user) {
  this.name = user.name;
}

User.getUsers = (output) => {
  sql.query('SELECT *FROM user;', (error, result) => {
    if (error) {
      console.log("Error: ", error);
      output(null, error);
      return;
    }
    console.log("Users are: ", result);
    output(null, result);
  })
}

User.createUser = (userNew, output) => {
  console.log(userNew);
  sql.query(`INSERT INTO user SET ?`, userNew,
    (error, result) => {
    if (error) {
      console.log("Error: ", error);
      output(null, error);
      return;
    }
    console.log("User Created");
    output(null, { mssage: "User Created" });
  })
}
module.exports = User;
