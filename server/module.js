
module.exports = {

  getUser: (sqlInstance, callback) => {
    let query = `SELECT *FROM user where id = ?`;
    let params = [1];
    sqlInstance.query(query, params,
      (error, result) => {
        if (error) {
          console.log("Error: ", error);
          callback(error, null);
          return;
        }
        console.log("Users are: ", result);
        callback(null, result);
      });
  },

  createUser: (sqlInstance, data, callback) => {
    
    let query = `INSERT INTO user SET name = ?`;
    let params = [data.name];
    sqlInstance.query(query, params,
      (error, result) => {
        if (error) {
          console.log("Error: ", error);
          callback(error, null);
          return;
        }
        callback(null, result);
      });
  }
}