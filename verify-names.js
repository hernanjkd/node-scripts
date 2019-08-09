const url = 'https://api.breatheco.de/user/?access_token=ead2dc2fc5d1c5bcfa48b83ef1b6816034a5d575';

const fullTrim = str => {
    let newStr = "";
    str = str.trim();
    for (let i in str) if (str[i] !== " " || str[i - 1] !== " ") newStr += str[i];
    return newStr;
};

let firstNullNull = []; // "null null"
let allLowerOrUpper = []; // first middle and last all together, all lower or upper case
let firstLastOneField = []; // first and last in one field, other field empty
let moreThanTwoOneField = []; // more than 2 names in one field, other empty
let hasNull = []; // have a null value
let notCapitalized = []; // not capitalized
let manyEmptySpaces = [];
let emptyEmail = [];

let noFormatting = []; // properly formated name
let total = 0; // total amount of names

for (let user of data.data) {
    // In the fetch url: Students have email, Users have username
    let email = user.username === undefined ? user.email : user.username;

    let needsFormating = 0;
    // Check email has @
    if (!email.includes("@")) emptyEmail.push(user);

    // first is null
    if (user.first_name === null) {
        needsFormating++;
        hasNull.push(user);
    } else {
        // first is "null null"
        if (user.first_name.includes("null")) {
            firstNullNull.push(user);
            needsFormating++;
        }
        let last = user.last_name;
        // last is null
        if (user.last_name === null) {
            hasNull.push(user);
            // Set all null last names to ""
            last = "";
            needsFormating++;
        }
        // many empty spaces
        let emptySpaces = user.first_name.split(" ").length;
        let first = fullTrim(user.first_name);
        let arrFirstName = first.split(" ");
        if (emptySpaces > arrFirstName.length) {
            manyEmptySpaces.push(user);
            needsFormating++;
        }

        // All names equal to user name keep lower case and don't consider for formatting
        if (first !== email.substring(0, email.indexOf("@")).toLowerCase()) {
            // Any name not capitalized
            for (let name of arrFirstName.concat(last.split(" "))) {
                if (
                    name.charAt(0) !== name.charAt(0).toUpperCase() ||
                    name.charAt(2) !== name.charAt(2).toLowerCase()
                )
                    noCapName++;
            }
            if (noCapName > 0) {
                notCapitalized.push(user);
                needsFormating++;
            }

            let noCapName = 0;
            // first name is all lowercase or uppercase, last = ""
            if (
                arrFirstName.length === 1 &&
                last === "" &&
                (user.first_name === user.first_name.toLowerCase() ||
                    user.first_name === user.first_name.toUpperCase())
            ) {
                allLowerOrUpper.push(user);
                needsFormating++;
            }
        }
        // first and last in one field, last = ""
        if (arrFirstName.length === 2 && last === "") {
            firstLastOneField.push(user);
            needsFormating++;
        }
        // More than 2 names in one field, last = ""
        if (arrFirstName.length > 2 && last === "") {
            moreThanTwoOneField.push(user);
            needsFormating++;
        }
        // Names that don't need formatting
        if (needsFormating === 0) noFormatting.push(user);
    }
    total++;
}
console.log(firstNullNull);
console.log('first name: "null null" = ' + firstNullNull.length);
console.log(manyEmptySpaces);
console.log("Many empty spaces = " + manyEmptySpaces.length);
console.log(allLowerOrUpper);
console.log("All lowercase or uppercase, no last name = " + allLowerOrUpper.length);
console.log(firstLastOneField);
console.log('first name: "John Doe", no last name = ' + firstLastOneField.length);
console.log(moreThanTwoOneField);
console.log('first name: "John Joe Doe", no last name = ' + moreThanTwoOneField.length);
console.log(hasNull);
console.log("Have a null value = " + hasNull.length);
console.log(notCapitalized);
console.log("Not capitalized = " + notCapitalized.length);
console.log(noFormatting);
console.log("Names that don't need formatting = " + noFormatting.length);
console.log(emptyEmail);
console.log("Emails that don't have '@' = " + emptyEmail.length);
console.log("Total names checked = " + total);