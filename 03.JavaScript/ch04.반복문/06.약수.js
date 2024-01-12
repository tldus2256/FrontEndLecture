// 양의 정수 구하기
let num = 12;
let divisors = []
for(let i =1; i<= num ; i=i+1){
    if(num % i == 0){
        divisors.push(i);
    }
}
console.log(divisors);

// 두 수의 공약수 구하기
let num1 = 24, num2 = 60;
let commonDivisors = [];
for(let i = 1; i <= Math.min(num1,num2); i=i+1){
    if((num1 % i == 0 ) && (num2 % i == 0)){
        commonDivisors.push(i);
    }
}
console.log(commonDivisors);   

for(let a =1; a<1000; a++){
    for(let b =2; b<1000; b++){
        if(a<b && b<1000-a-b){
          if(((a**2) + (b**2)) == ((1000-a-b)**2)){
            console.log(`${a}, ${b}, ${1000-a-b}`);            
          }  
        }
    }
}

