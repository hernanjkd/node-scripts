const fetch = require("node-fetch");
const { studentCleanup } = require("./formatter.js");


const access_token = "76dd7a6f655407ac1a65b2b9c52aa8a10fe4939e";
const availableEndPoints = ["students", "user"];
const get = availableEndPoints[0];

const url = `https://api.breatheco.de/${get}/?access_token=${access_token}`;
const resp = await fetch(url);
const data = await resp.json();


const updateStudent = (student) => fetch('')
.then(resp => {
    if(!resp.ok) throw new Error(`There was an error updating ${student.name}`);
});

const cleanedStudents = studentCleanup(data);

for (let i in cleanedStudents)
    setTimeOut(() => {
        console.log(`Formatting 
            "${data[i].first_name}, ${data[i].last_name}" -> 
            "${cleanedStudents[i].first_name}, ${cleanedStudents[i].last_name}"`);
        await updateStudent(cleanedStudents[i]);
    }, 1000);

console.log('Complete!');