// 연습문제
// 1. 1에서 1000사이에 0은 몇번, 1은 몇번, ...., 9는 몇번 사용되었는가
//        123456789101112....9991000

let numStr = '';
for (let i = 1; i <= 1000; i++){
    numStr += i;
}

// 1이 몇번 사용되었나?
// 정규표현식 활용
console.log(numStr.replace(/[^1]/g,'').length);

for(let i = 0; i <= 9; i++){
    let pattern = new RegExp('[^' + 1 + ']', 'g');
    count = numStr.replace(pattern,'').length;
    console.log(`${i}: ${count}`);
}

// count 배열을 만들어 일일이 체크
let countArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for(let i = 0; i < numStr.length; i++){
    let num = Number(numStr[i]);
    countArr[num]++;
}
console.log(countArr);




// 2. 디지털시계
let answer = 0;
for(let i=0; i < 24; i++){
    if( i.toString().indexOf('3')>=0){
       answer += 3600;
       continue;
    }
    for(let k=0; k<= 59; k++){
        if(k.toString().indexOf('3')>=0){
            answer += 60;
        }
    }
}
console.log(answer);



// 3. 두개의 세자리 곱해서 나온 결과가 palindrome 일때
// 가장 큰 palindrome 수와 어떤 수를 곱해서 나온 결과인가?

function isPalindrome(str){
    let reverseStr = str.split('').reverse().join('');
    return str == reverseStr;
}

let answer2 = [];
for(let i = 100; i < 1000; i++){
    for(let k = 100; k < 1000; k++){
        if(isPalindrome((i*k).toString())){
            answer2.push({num1:i,num2:k,palindrome:i*k});
        }
    }
}
answer2.sort(function(a,b){
    return a.palindrome - b.palindrome;         // palindrome 정렬
});
let anw = answer2.pop();    // 마지막꺼 나오는거

console.log(`가장큰 Palindrome 수는 ${anw.num1} 와 ${anw.num2}를 곱한값인 ${anw.palindrome} 입니다.`);


// C:/Workspace/WebProject/03.JavaScript/ch07.표준내장객체/04.String연습.js
// 에서 파일명(04.String연습.js)만 출력하세요.

let str = 'C:/Workspace/WebProject/03.JavaScript/ch07.표준내장객체/04.String연습.js';

console.log(str.substring(str.indexOf('4') - 1));
//2024-01-08T08:15:17.175Z
//2024-01-08