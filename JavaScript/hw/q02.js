// 백준도장 31090문제

function isDivisible(year) {
    let num = year % 100;
    if((year + 1) % num == 0)
        return 'Good';
    return 'Bad';
}

for (let year = 2023; year <= 2040; year++){
    console.log(`${year}: ${isDivisible(year)}`);
}