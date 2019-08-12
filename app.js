const fetch = require("node-fetch");
const { studentCleanup } = require("./formatter.js");


const access_token = "57129b9a324c1336b9ea5645d77d8e904c9fcd3a";
const get = {students: "students", user: "user"};

async function asyncFetch(_url, _opt) {
    const response = await fetch(_url, _opt);
    const data = await response.json();
    return json;
}

const url = (id) => `https://api.breatheco.de/${get.students}/${id}?access_token=${access_token}`;


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