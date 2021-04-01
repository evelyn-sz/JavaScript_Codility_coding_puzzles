function tapeEquilibrium(A){
    let clusterOne = 0;
    let clusterTwo = 0;
    let tempAbsoluteDifference = 2000;

    function sumOfElements(cumulative, element) {
        return cumulative + element
    }

    for (let i = 1; i < A.length; i++){
        clusterOne = (A.slice(0, i)).reduce(sumOfElements, 0);
        clusterTwo = (A.slice(i, A.length)).reduce(sumOfElements, 0);

        let absoluteDifference = Math.abs(clusterOne -= clusterTwo)
        if (absoluteDifference <= tempAbsoluteDifference)
            tempAbsoluteDifference = absoluteDifference;
        }
        return tempAbsoluteDifference;
}

// split an array
// push first part into clusterOne AND reduce
// push second part into clusterTwo AND reduce
// subtract absolute difference
// push abosulte difference into variable
// repeat for each i
// if difference < difference already stored, replace
// return difference

const A = [3, 1, 2, 4, 3];
console.log(tapeEquilibrium(A));

function solution(A) {
    let sum = A.reduce((total, value) => total + value, 0)
    let min = Number.POSITIVE_INFINITY
    let cumulativeSum = 0
    for (let i = 0; i < A.length - 1; ++i) {
      cumulativeSum = cumulativeSum + A[i]
      sum = sum - A[i]
      diff = Math.abs(sum - cumulativeSum)
      if (diff < min) {
        min = diff
      }
    }
    return min
  }

  function solution3(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let sum = A.reduce((a, b) => a + b, 0);
    let diff = 0;
    let index = 0;
    
    for(let i=0; i<A.length; i++){
        let d = sum - A[i];
        if(diff < d){
            diff = d;
            index = i;
        }
    }
    
    return index;
}

function solution6(A) {
    const sum = A.reduce((s, i) => s + i, 0)
    let min = Number.MAX_VALUE
    let half_sum = 0
    for(let i = 0; i < A.length - 1; i++) {
        half_sum += A[i]
        min = Math.min(min, Math.abs(sum - (2 * half_sum)))
    }
    return min
}