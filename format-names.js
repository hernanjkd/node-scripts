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
        const fullTrim = str => {
            let newStr = "";
            str = str.trim();
            for (let i in str)
                if (str[i] !== " " || str[i - 1] !== " ")
                    newStr += str[i];
            return newStr;
        };

        /*****************
         *  FORMAT NAMES
         *****************/
        for (let e in result) {
            let first = e.first_name;
            let last = e.last_name === null ? "" : e.last_name;

            // first_name: null
            // first_name: "null null"
            if (first === null || first.includes("null")) {
                if (e.email !== undefined) first = e.email.substring(0, e.email.indexOf("@")).toLowerCase();
                else if (e.username !== undefined)
                    first = e.username.substring(0, e.username.indexOf("@")).toLowerCase();
            } else {
                first = fullTrim(first);
                last = fullTrim(last);

                let arr = first.split(" ");
                // first_name: "John"
                // first_name: "JohnDoe"
                // first_name: "JOHNDOE"
                if (arr.length === 1) {
                    if (first !== first.toLowerCase() && first !== first.toUpperCase()) {
                        let temp = "";
                        for (let char of first) {
                            if (char === char.toUpperCase() && isNaN(char)) temp += " " + char;
                            else temp += char;
                        }
                        first = temp.trim();
                        arr = first.split(" ");
                        if (arr.length === 1) first = capitalize(arr[0]);
                    } else first = capitalize(first);
                }
                // first_name: "john doe", last_name: ""
                if (arr.length === 2 && last === "") {
                    first = capitalize(arr[0]);
                    last = capitalize(arr[1]);
                }
                // first_name: "john joe doe", last_name: ""
                else if (arr.length === 3 && last === "") {
                    first = capitalize(arr[0]) + " " + capitalize(arr[1]);
                    last = capitalize(arr[2]);
                }
                // first_name: "john billy", last_name: "joe doe"
                else if (last !== "") {
                    let arrl = last.split(" ");
                    for (let i in arr) arr[i] = capitalize(arr[i]);
                    for (let i in arrl) arrl[i] = capitalize(arrl[i]);
                }
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

db.end();
