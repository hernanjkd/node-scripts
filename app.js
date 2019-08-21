const fetch = require("node-fetch");
const { studentCleanup } = require("./formatter.js");
const fs = require("fs");

const access_token = "9dd4f1fe9ccb59129b02fefca18cbab09231d6df";
const get = { students: "student", user: "user" };

const url = (id = "") =>
    console.log("fetching ", id) || `https://api.breatheco.de/${get.students}/${id}?access_token=${access_token}`;


const updateStudent = student => fetch(url(student.id), {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(student)
});

const spaces = (num) => num > 99 ? '....' : num > 9 ? '...' : '..';

let log = "";
let err = "";

fetch(`https://api.breatheco.de/students/?access_token=${access_token}`)
    .then(resp => resp.json())
    .then(({ data }) => {

        const cleanStudents = studentCleanup(data);
        // let i = cleanStudents.length;

        // const next = () => {
        //     setTimeout(() => {

        //         i--;
        for (let i in data) {


            if (data[i].first_name !== cleanStudents[i].first_name &&
                data[i].last_name !== cleanStudents[i].last_name) {

                err += i + `. "${data[i].first_name}, ${data[i].last_name}" --- ${data[i].email}`;
                err += ` ------- FIX FIRST & LAST\n\n`;
                err += `${spaces(i)} "${cleanStudents[i].first_name}, ${cleanStudents[i].last_name}"\n\n\n`;
            }
            else if (data[i].first_name !== cleanStudents[i].first_name) {
                err += i + `. "${data[i].first_name}, ${data[i].last_name}" --- ${data[i].email}`;
                err += ` ------- FIX FIRST\n\n`;
                err += `${spaces(i)} "${cleanStudents[i].first_name}, ${cleanStudents[i].last_name}"\n\n\n`;
            }
            else if (data[i].last_name !== cleanStudents[i].last_name) {
                err += i + `. "${data[i].first_name}, ${data[i].last_name}" --- ${data[i].email}`;
                err += ` ------- FIX LAST\n\n`;
                err += `${spaces(i)} "${cleanStudents[i].first_name}, ${cleanStudents[i].last_name}"\n\n\n`;
            }
            else {
                log += i + `. "${data[i].first_name}, ${data[i].last_name}" --- ${data[i].email}`;
                log += ` ------- CORRECT\n\n`;
                log += `${spaces(i)} "${cleanStudents[i].first_name}, ${cleanStudents[i].last_name}"\n\n\n`;
            }


        }
        fs.writeFile("log.txt", err, err => { if (err) throw err; });
        fs.appendFile("log.txt", log, err => { if (err) throw err; });

        // updateStudent(cleanStudents[i])
        //     .then(resp => console.log(`status = ${resp.status}, i = ${i}`) || resp.ok && i && next())
        //     .catch(err => console.error(err));
        //     }, 100);
        // };
        // next();
    })
    .catch(err => console.error(err));

