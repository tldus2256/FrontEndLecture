function isDivisible(year){
    let num = year % 100;
    if( (year +1 ) % num == 0){
        console.log('Good');
    } else {
        console.log('Bye');
    }
}
let year = 2023;
while(year<=2040){
    isDivisible(year);
    year++;
}