const mysql = require('mysql');

let db = mysql.createConnection({
  host: "",
  user: "",
  password: "",
  database: ""
});


db.connect( err => {
    if (err) throw err;
    console.log("Connected");


    db.query("SELECT id, first_name, last_name  FROM students", (err, result) => {
        if (err) throw err;
        console.log("Data retrieved");

        const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();


        /*****************
         *  FORMAT NAMES
         *****************/
        for (let e in result) {
            let first = e.first_name;
            let last = e.last_name;
            
            // first_name: null
            // first_name: "null null"
            if (first === null || first.includes('null')) {
                if (e.email)
            }

            let arr = first.split(" ");
            // first_name: "JohnDoe"
            // first_name: "JOHNDOE"
            if (arr.length == 1) {
                let countUpperCase = 0;
                let temp = "";
                for (let char of first) {
                    if (countUpperCase == 4) {
                        temp = first;
                        break;
                    }                    
                    if (char == char.toUpperCase()) {
                        temp += " " + char;
                        countUpperCase++;
                    } else temp += char;
                }
                first = temp.trim();
            }
            // first_name: "john doe"
            else if (arr.length > 1) {

            }
            
            if (first != e.first_name || last != e.last_name)
                db.query(`UPDATE students 
                        SET first_name = '${first}', last_name = '${last}'
                        WHERE id = '${e.id}'`, err => {
                            if (err) throw err;
                            console.log(`${e.first_name} -> ${first}, ${e.last_name} -> ${last}`)
                        })
        }

    });
    
});

db.end();














/********************* */

var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
});


/********************* */
`
UPDATE Customers
SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
WHERE CustomerID = 1;`


/********************* */

con.connect(function(err) {
    if (err) throw err;
    // if connection is successful
    var records = [
      ['Jack', 16, 82],
      ['Priya', 17, 88],
      ['Amy', 15, 74]
    ];
    con.query("INSERT INTO students (name,rollno,marks) VALUES ?", [records], function (err, result, fields) {
      // if any error while executing above query, throw error
      if (err) throw err;
      // if there is no error, you have the result
      console.log(result);
      console.log("Number of rows affected : " + result.affectedRows);
      console.log("Number of records affected with warning : " + result.warningCount);
      console.log("Message from MySQL Server : " + result.message);
    });
  });


/********************* */

connection.connect();
 
var query = connection.query('SELECT * FROM wp_posts');
 
query.on('error', function(err) {
    throw err;
});
 
query.on('fields', function(fields) {
    console.log(fields);
});
 
query.on('result', function(row) {
    connection.pause();
    // Do some more processing on the row
    console.log(row);
    connection.resume();
});
 
connection.end();