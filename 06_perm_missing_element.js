function permMissingElem(A){
    let N = A.length;
    sortedArray = A.sort();

    if (N === 0)
        return 0;

    for (i = 0; i < N; i++) {
        if ((sortedArray[i]) +1 != sortedArray[i+1])
            return sortedArray[i] + 1;
    }
}


const A = [3,4,6,7,2,1]
const B = [6, 9, 10, 12, 8, 7, 13]
const C = [];

console.log(permMissingElem(A))
console.log(permMissingElem(B))
console.log(permMissingElem(C))
console.log(permMissingElem([2]))

function permMissingElem2(A){
    let size = A.length + 1;
    let expectedResult = (size * (size + 1) / 2);
    let actualResult = A.reduce(function(cumulative, endValue){return cumulative + endValue}, 0);

    return expectedResult - actualResult;
}

console.log("permMissingElement2")
console.log(permMissingElem2(A));