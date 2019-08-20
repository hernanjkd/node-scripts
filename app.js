const fetch = require("node-fetch");
const { studentCleanup } = require("./formatter.js");
const fs = require("fs");

const access_token = "b9a7a97b6fbeccb4741b78db34ee68e0a981910b";
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


let log = "";

fetch(`https://api.breatheco.de/students/?access_token=${access_token}`)
    .then(resp => resp.json())
    .then(({ data }) => {

        const cleanStudents = studentCleanup(data);
        // let i = cleanStudents.length;

        // const next = () => {
        //     setTimeout(() => {

        //         i--;
        for (let i in data) {
            log += i + '. ';
            if (i === '666') break;
            console.log(i)
            if (data[i] !== undefined) {
                if (data[i].first_name !== cleanStudents[i].first_name &&
                    data[i].last_name !== cleanStudents[i].last_name) {

                    log += `${data[i].first_name}, ${data[i].last_name} - ${data[i].email} ------- FIX FIRST & LAST\n${cleanStudents[i].first_name}, ${cleanStudents[i].last_name}\n\n`;
                }
                else if (data[i].first_name !== cleanStudents[i].first_name) {
                    log += `${data[i].email} ${data[i].first_name} ----> ${cleanStudents[i].first_name} ------- FIX FIRST\n\n`;
                }
                else if (data[i].last_name !== cleanStudents[i].last_name) {
                    log += `${data[i].last_name} ----> ${cleanStudents[i].last_name} ------- FIX LAST\n\n`;
                }
                else {
                    log += `${data[i].first_name}, ${data[i].last_name} ------- CORRECT\n\n`;
                }
            }
        }
        fs.appendFile("log.txt", log, err => { if (err) throw err; });
        // updateStudent(cleanStudents[i])
        //     .then(resp => console.log(`status = ${resp.status}, i = ${i}`) || resp.ok && i && next())
        //     .catch(err => console.error(err));
        //     }, 100);
        // };
        // next();
    })
    .catch(err => console.error(err));

