let A = 6;
let B = 2;
let C = 5;
var max = Math.max(A,B,C);

if (A==B && B==C){
    console.log(10000 + A * 1000);
} 
else if (A==B && !(B==C)){
    console.log(1000 + A*100);
}
else if (A==C && !(C==B)){
    console.log(1000 +C*100);
}
else if (B==C && !(B==A)){
    console.log(1000 +B*100);
}
else {
    console.log(("C",max) * 100);
}

/**
 * 
 * 3개 다 같은경우  1개
 * 2개만 같은경우
 * -> A==B, A != C
 * -> B==C, A != B
 * 다다른경우 1개
**/

let dice1 = Math.ceil(Math.random()*6);      //1 ~ 6
let dice2 = Math.ceil(Math.random()*6);
let dice3 = Math.ceil(Math.random()*6);
let prize = 0;   

if(dice1 == dice2 && dice2 == dice3){       
    prize = 10000 * dice1 * 1000;
}else if(dice1 == dice2){
    prize = 1000 + dice1 * 100;
}else if(dice2 == dice3){
    prize = 1000 + dice2 * 100;
} else if( dice1 == dice3){
    prize = 1000 + dice1 * 100;
} else {
    let maxDice = dice1 > dice2 ? dice1 : dice2;
    maxDice = maxDice > dice3 ? maxDice : dice3;
    // let maxDice = Math.max(dice1, dice2, dice3);
    prize = maxDice * 100;
}
console.log(`${dice1}, ${dice2},${dice3} --> ${prize}원`);
