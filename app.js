const fetch = require("node-fetch");
const { studentCleanup } = require("./formatter.js");


const access_token = "b86ee02825166758efd20ceb275c5cdca49e4d1b";
const get = {students: "students", user: "user"};

const url = (id='') => `https://api.breatheco.de/${get.students}/${id}?access_token=${access_token}`;

async function asyncFetch(_url, _opt={}) {
    const resp = await fetch(_url, _opt);
    const data = await resp.json();
    return data;
}

const updateStudent = (student) => asyncFetch(url(student.id),{
    method: 'PUT',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(student)
});


let data = asyncFetch(url());

const cleanStudents = studentCleanup(data);

let i = cleanStudents.length;
const next = () => {
    setTimeout(() => {
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

// async function asyncFetch() {
//     // let resp = await fetch('https://api.breatheco.de/students/?access_token=b86ee02825166758efd20ceb275c5cdca49e4d1b')
//     let resp = await fetch('http://127.0.0.1:3000/');
//     let data = await resp.json();
//     return data;
// }

// let x = async () => {
//     let data = await asyncFetch();
//     console.log(data);
// }
// x();


// fetch('http://127.0.0.1:3000/')
// .then(resp => resp.json())
// .then(data => console.log(data));


// console.log(data.code)
// console.log( Array.isArray(data.data) )
// setTimeout(() => {
// console.log( data );
// }, 3000);