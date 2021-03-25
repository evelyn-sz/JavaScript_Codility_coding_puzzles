
// That's the best one 
console.log("Odd Occurence 3");

function oddOccurence3(A){
    // write your code in JavaScript (Node.js 8.9.4)
    stack = new Object();
    for (let i = 0; i < A.length; i++){
        if (stack.hasOwnProperty(A[i])) {
            console.log(stack)
            delete stack[A[i]]; 
        } else {
            stack[A[i]] = 1;
            console.log(`stack: ${stack}`);
            console.log(stack);
        }
    }
    solution = Object.keys(stack);
    console.log(`solution: ${solution}`);
    console.log(solution);
    return parseInt(solution[0]);    
}

console.log(oddOccurence3([1,2,3,4,2,3,4]))
console.log(`[6,5,4,3,2,1,6,5,3,2,1] ${oddOccurence3([6,5,4,3,2,1,6,5,3,2,1])}`)
console.log(oddOccurence3([6,5,6,4,5,3,2,3,2]))


// Works but inefficient
function oddOccurence2(A){
   
    if (A != []){
        for (number of A){
            if (A.indexOf(number) != A.lastIndexOf(number)) {
                return number
            } 
        } 
        return []
    }
}


// Needs debugging
function oddOccurence(A){
    for (number of A){
        let index = A.indexOf(number)
        if (index != -1){
            A.splice(index)
            if(index === -1)
            return number
        }
    }
}
console.log("Odd Occurence 1")
console.log(oddOccurence([1,2,3,4,2,3,4]))

