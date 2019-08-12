const fetch = require("node-fetch");
const { studentCleanup } = require("./formatter.js");


const access_token = "9c7b0fb28dba87a165b52e8d77597fc6ecd89707";
const get = {students: "students", user: "user"};

const url = (id='') => `https://api.breatheco.de/${get.students}/${id}?access_token=${access_token}`;

async function asyncFetch(_url, _opt={}) {
    const response = await fetch(_url, _opt);
    const data = await response.json();
    return data;
}

const updateStudent = (student) => asyncFetch(url(student.id),{
    method: 'PUT',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(student)
});


let { data } = asyncFetch(url());
console.log(asyncFetch(url()));
//const cleanStudents = studentCleanup(data);

let i = cleanStudents.length;
const next = () => {
    setTimeOut(() => {
        i--;
        console.log(`"${data[i].first_name}, ${data[i].last_name}" - ${data[i].email}`);
        console.log(`"${cleanStudents[i].first_name}, ${cleanStudents[i].last_name}"`);
        console.log('');
        //updateStudent(cleanStudents[i]);
        i && next();
    }, 1000);
}
next();

console.log('Complete!');