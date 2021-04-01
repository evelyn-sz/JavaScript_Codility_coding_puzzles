function swapElements(A, B, m){
    let size = A.length;
    let sumA = A.reduce((a, b) => a + b, 0);
    let sumB = B.reduce((a, b) => a+ b, 0);
    let d = sumB - sumA;

    if (d % 2 === 1)
        return false;

    Math.floor(d /= 2);
    let count = [A].filter(x => x==m).length;

    for (let i = 0; i < size - 1; i ++){
        return 0 <= B[i] - d && B[i] - d <= m && count[B[i] - d] >= 0;
    }
}

const A = [2, 2, 4, 4];
const B = [2, 2, 4, 8];

console.log(A.filter(x => x==2).length);
console.log(A.reduce((total, x) => (x == 2 ? total+1: total), 0))


console.log(swapElements(A, B, 4))