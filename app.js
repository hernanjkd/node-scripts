const fetch = require("node-fetch");
const { studentCleanup } = require("./formatter.js");
const fs = require("fs");

const access_token = "a673067b2ef5e63443f4a209afa133cefdd860e9";
const get = { students: "student", user: "user" };

const url = (id = "") =>
	console.log("fetching ", id) ||
	`https://api.breatheco.de/${
		get.students
	}/${id}?access_token=${access_token}`;

fetch(
	"https://api.breatheco.de/students/?access_token=b86ee02825166758efd20ceb275c5cdca49e4d1b"
)
	.then(resp => resp.json())
	.then(({ data }) => {
		const cleanStudents = studentCleanup(data);
		let i = cleanStudents.length;
		const next = () => {
			setTimeout(() => {
				i--;
				if (
					data[i].first_name !== cleanStudent[i].first_name &&
					data[i].last_name !== cleanStudent[i].last_name
				) {
					console.log(
						`${data[i].first_name}, ${data[i].last_name} - ${
							data[i].email
						} ------- FIRST & LAST`
					);
					console.log(
						`${cleanStudents[i].first_name}, ${
							cleanStudents[i].last_name
						}`
					);
					console.log("");
				} else if (data[i].first_name !== cleanStudent[i].first_name) {
					console.log(`${data[i].email}`);
					console.log(
						`${data[i].first_name} ----> ${
							cleanStudents[i].first_name
						} ------- FIRST`
					);
					console.log("");
				} else if (data[i].last_name !== cleanStudent[i].last_name) {
					console.log(
						`${data[i].last_name} ----> ${
							cleanStudents[i].last_name
						} ------- LAST`
					);
					console.log("");
				} else {
					console.log(
						`${data[i].first_name}, ${
							data[i].last_name
						} ------- CORRECT`
					);
					console.log("");
				}
				// console.log(`"${data[i].first_name}, ${data[i].last_name}" - ${data[i].email}`);
				// console.log(`"${cleanStudents[i].first_name}, ${cleanStudents[i].last_name}"`);
				// console.log('');
				// updateStudent(cleanStudents[i])
				//     .then(resp => console.log(`status = ${resp.status}, i = ${i}`) || resp.ok && i && next())
				//     .catch(err => console.error(err));
			}, 1000);
		};
		next();
	})
	.catch(err => console.error(err));

const updateStudent = student =>
	fetch(url(student.id), {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(student)
	});
