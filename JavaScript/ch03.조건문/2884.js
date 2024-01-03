let hour = Math.ceil(Math.random() * 23);
let minute =  Math.ceil(Math.random() * 59);

console.log(`hour:${hour} , minute:${minute}`);

if (minute >= 45) {
    console.log(`hour:${hour} , minute:${minute - 45}`);
}
else if (minute < 45) {
    if (hour == 0) {
        console.log(`hour:${23} , minute:${minute + 15}`);
    }
    else {
        console.log(`hour:${hour - 1} , minute:${minute + 15}`);
    }
}

