
// for(let N=1; N<=9; N=N+1){
//     console.log(`2*${N} = ${2*N}`);
// }



for (let i = 2; i <= 9; i = i + 1) {
    console.log(`${i}단 입니다.`);
    for (let k = 1; k <= 9; k = k + 1) {
        console.log(`${i} * ${k} = ${i * k}`);
    }
    console.log('');
}