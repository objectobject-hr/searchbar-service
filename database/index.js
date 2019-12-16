const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const db = mysql.createConnection(mysqlConfig);

db.connect((err) => {
  if (err) {
    console.error("Not Connected to Database")
  } else {
    console.log("Connected to Database!")
  }
})


const getProducts = function(id, callback) {
  db.query(`SELECT * FROM cranberries WHERE letter IN ('${id}')`, (err, result) => {
    if (err) {
      console.error(err);
      callback(err);
    } else {
      callback(null, result);
    }
  });
}


module.exports.getProducts = getProducts;
module.exports.db = db;


// const response = (err, result, callback) => {
//     if (err) {
//       callback(err);
//     } else {
//       callback(null, result);
//     }
// };