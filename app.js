const fetch = require("node-fetch");
const { studentCleanup } = require("./formater.js");

const url = `https://api.breatheco.de/${get}/?access_token=${access_token}`;
const resp = await fetch(url);
const data = await resp.json();


const uodateStudent = (student) => fetch('')
.then(resp => {
    if(!resp.ok) throw new Error(`There was an error updating ${student.name}`);
});

const cleanedStudents = studentCleanup(data);
let index = 0;
setInterval(() => {
    await uodateStudent(cleanedStudents[index]);
    index++;
}, 1000);
