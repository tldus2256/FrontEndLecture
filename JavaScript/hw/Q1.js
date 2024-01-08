let birthYear = 1995;
let birthMonth = 1;
let birthdate = 5;
let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();
let age = 0;

if (month > birthMonth) {
    age = year - birthYear;
} else if (month < birthMonth) {
    age = year - birthMonth - 1;
} else {
    if (date >= birthdate) {
        age = year - birthYear;

    } else {
        age = year - birthMonth - 1;

    }
}
console.log(age);



