function cyclicRotation(A, K){

    N = A.length;

    while (K > 0) {
        for (let i =0; i < N-1; i++){
            if (A[i] < N-1 ){
                A[i] = A[i+1]
                console.log(A[i], A[i+1])
            } else if (A[i] == A[N-1]) {
                A[i] == A[0]
            }
        }
        K = K -1;
    }
    console.log(A)
}

console.log(cyclicRotation([1,2,3], 4))

console.log("Cyclic rotation 2")
function cyclicRotation2(A, K){

    N = A.length;
    newArray = []

    if (A != [] && K >= 0){
    while (K>0){
        newArray.push(A[N-1])
        for (let i = 0; i < N-1; i++){
                newArray.push(A[i])
        }
        
        K = K -1
        A = newArray
        newArray = []
    }
        return A;
    } 
    return A;
}

console.log(cyclicRotation2([1, 2, 3], 1))
console.log(cyclicRotation2([1, 2, 3], 2))
console.log(cyclicRotation2([1, 2, 3], 3))
console.log(cyclicRotation2([1, 2, 3], 4))
console.log(cyclicRotation2([1, 2, 3, 4], 4))
console.log(cyclicRotation2([1, 2, 3, 4, 5], 5))
console.log(cyclicRotation2([], 5))
console.log(cyclicRotation2([1, 2, 3], 0))

function cyclicRotation3(A,K) {  
    if (K === 0 || K === A.length) {    
      return A;  
    }  
    let shift = K % A.length;  
    for (let i = 0; i < shift; i++) {    
      let lastItem = A.pop();    
      A.unshift(lastItem);  
    }  
    return A;
  }

console.log("Cyclic Rotation 3")
console.log(cyclicRotation3([1, 2, 3], 1))
console.log(cyclicRotation3([1, 2, 3], 2))
console.log(cyclicRotation3([1, 2, 3], 3))
console.log(cyclicRotation3([1, 2, 3], 4))
console.log(cyclicRotation3([1, 2, 3, 4], 4))
console.log(cyclicRotation3([1, 2, 3, 4, 5], 5))
console.log(cyclicRotation3([], 5))
console.log(cyclicRotation3([1, 2, 3], 0))