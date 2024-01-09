
// for(let i=2;i<10;i++){
//     console.log(`${i}단 입니다.`)
//     for(let k=1;k<10;k++){
//         console.log(`${i}*${k} = ${i*k}`);
//     }
//     console.log(``);
// }
//let 까먹지말기
//for문에서 위치 기억하기 자주바뀌는애가 안에있는애임 ㅇㅇ
//출력문에서 $안에있는거 말고는컴퓨터는 인식 X 그냥 고대로 출력

function 구구단(a){
    for(let b=1; b<10; b++){
        console.log(`${a}*${b} = ${a*b}`);
    }        
    return 0;
}
// 구구단(3);
//얘는리턴이 없음 왜냐면 출력문이 결과를출력함

function 이차함수(a){
    return a**2;
}
이차함수(8); // 이렇게하면 출력문이 없기떄문에 출력이 안됨.
console.log(이차함수(8));


// **** 함수 기본형태 ****
function 함수명(전달값){
    
    
    return 0;
}
// **** 함수 기본형태 ****

// 00:00 ~ 23:59 ,3
function n이포함된초함수(n){
    // 00:00 ~ 23:59 에서 n이 포함된 초를 구하시오.
    let answer = 0;
    for(let i = 0; i < 24; i++ ){
        if(String(i).includes(String(n))){
            answer = answer + 3600; 
            continue;   
        }
        for(let k = 0; k < 60; k++){
            if(String(k).includes(String(n))){
                answer = answer + 60;
            }
        }
    }

    return answer;
}
console.log(n이포함된초함수(3));

// function 함수(N){
//     let anw = 0;


//     return anw;
// }