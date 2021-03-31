function tapeEquilibrium(A){
    let clusterOne = 0;
    let clusterTwo = 0;
    let tempAbsoluteDifference = 2000;

    function sumOfElements(cumulative, element) {
        return cumulative + element
    }

    for (let i = 1; i < A.length; i++){
        clusterOne = (A.slice(0, i)).reduce(sumOfElements, 0);
        console.log(`clusterOne: ${clusterOne}`)
        clusterTwo = (A.slice(i, A.length)).reduce(sumOfElements, 0);
        console.log(`clusterTwo: ${clusterTwo}`)

        let absoluteDifference = Math.abs(clusterOne -= clusterTwo)
        console.log(`absoluteDiffference: ${absoluteDifference}`);
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