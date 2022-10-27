var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pass"
});

con.connect(function(err) {
  if (err) {
      console.log(err);
      return;
  }
  console.log("Connected!");
  con.query("USE lerochka;");
  con.query("SELECT id FROM test_dialogs", function (err, result, fields) {
    if (err) throw err;
    console.log(result[0].id);
  });
});
