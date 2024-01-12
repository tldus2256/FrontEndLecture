let hour;
let minute;
let time;

console.log(`hour:${hour} minute:${minute}`);

if(minute + time > 59){
    console.log(`hour:${hour + 1} minute:${minute}`);
}
else if(minute + time <= 59){
    console.log(`hour:${hour} minute:${minute}`);
}
