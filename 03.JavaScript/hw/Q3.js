array=[24, 67, 45, 97, 43];

function sum_sum(arr){
    let sum1 = 0;
    let sum2 = 0;
    for(num of arr){
        sum1 = sum1 + num;
    } 
    sum1 = sum1**2;
    
    for(num of arr){
        sum2 = sum2 + num**2;
    } 
    let big = Math.max(sum1,sum2);
    let small = Math.min(sum1,sum2);

    return big-small;
}
console.log(sum_sum(array));




