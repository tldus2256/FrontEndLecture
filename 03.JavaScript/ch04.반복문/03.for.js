// for - 반복문
// 1에서 1000까지 합 구하기

let sum = 0;
for(let i =1; i <= 1000; i++) {
    sum += i;
}
console.log(`1에서 1000까지 합은 ${sum}`);

// 1에서 1000까지 홀수 합 구하기
let sum2 = 0;
for(let i =1; i <= 1000; i = i+2) {
    sum2 += i;
}
console.log(`1에서 1000까지 합은 ${sum2}`);

// 1에서 1000까지 짝수 합 구하기
let sum3 = 0;
for(let i =2; i <= 1000; i+=2) {
    sum3 += i;
}
console.log(`1에서 1000까지 합은 ${sum3}`);

// 1에서 10까지 곱 구하기
let product = 1;
for (let i = 1; i <= 10; i = i+1) {
    product *= i;
}
console.log(`1에서 10까지 곱은 ${product}`);

// array의 요소 출력
// element1, element2, ...
let fruits = ['사과', '감', '귤', '배'];
let fruitstr = '';
for (let fruit of fruits) {
    fruitstr += fruit + ',';
}
console.log(fruitstr);




