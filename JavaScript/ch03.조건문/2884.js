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

let hour = 6, minute = 30;
let newHour = 0 , newMinute = 0;

if (minute >= 45){
    newHour = hour;
    newMinute = minute - 45;
} else {
    if(hour == 0){
        newHour = 23;
        newMinute = ,minute + 60 - 45;
    } else{
        newHour = hour - 1;
        newMinute = minute + 60 - 45;
    }
}
console.log(`${hour}시 ${minute}분 --> ${newHour}시 ${newMinute}분`);