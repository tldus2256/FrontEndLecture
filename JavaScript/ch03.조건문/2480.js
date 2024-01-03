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