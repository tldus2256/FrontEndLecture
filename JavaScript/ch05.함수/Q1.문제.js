// 배열에 대한 함수 만들어 보기
let sampleArray = [43, 17, 25, 36, 98, 73];

// 1. 배열을 인수로 받아서 합을 반환하는 함수
function sumArray(arr) {
    let sum = 0;
    for (num of arr) {
        sum += num;
    }
    // for(let i =0; i<arr.length; i++){
    //     sum += arr[i];
    // }

    return sum;
}

// 2. 배열에서 최대값을 찾아서 반환해주는 함수
function maxArray(arr) {
    let max = arr[0];
    for (num of arr) {
        if (max < num) {
            max = num;
        }
    }
    return max;
}


function minArray(arr) {
    let min = arr[0];
    for (num of arr) {
        if (min > num) {
            min = num;
        }
    }
    return min;
}

function average(arr) {
    let sum = 0;
    let avg = 0;
    for (num of arr) {
        sum += num;
    }
    avg = sum / arr.length;
    return avg;
}


function sumOfSquare(arr) {
    let sum = 0;
    for (num of arr) {
        sum += num ** 2;
    }
    return sum;
}
console.log(maxArray(sampleArray));
console.log(sumArray(sampleArray));
console.log(average(sampleArray));
console.log(sumOfSquare(sampleArray));
