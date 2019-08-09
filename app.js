const fetch = require("node-fetch");
const { studentCleanup } = require("./formatter.js");


const access_token = "76dd7a6f655407ac1a65b2b9c52aa8a10fe4939e";
const availableEndPoints = ["students", "user"];
const get = availableEndPoints[0];
const req = async (_url, _opt) => {
    const response = await fetch(_url, _opt);
    const json = await response.json();
    return json;
}

const url = (id) => `https://api.breatheco.de/${get}/${id}?access_token=${access_token}`;
const data = await req(url);


const updateStudent = (student) => await req(url(student.id),{
    method: 'PUT',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(student)
});

const cleanedStudents = studentCleanup(data);

let i = cleanedStudents.length;
const next = () => {
    setTimeOut(() => {
        console.log(`"${data[i].first_name}, ${data[i].last_name}" - ${data.email}`);
        console.log(`"${cleanedStudents[i].first_name}, ${cleanedStudents[i].last_name}"`);
        console.log('');
        updateStudent(cleanedStudents[i]);
        i && next();
    }, 1000);
}
next();

console.log('Complete!');