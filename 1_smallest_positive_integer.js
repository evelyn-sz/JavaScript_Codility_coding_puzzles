const firstMissingPositive = function (A){

    let maxSize = 1000000;
    let counter = 0;

    for (number of A)
        if (number >= 0 && number <= maxSize){
            counter[number -1] = 1;
        }
    
    for (i =0; i< maxSize; i++)
        if (counter[i] == 0)
            return i+1

        return maxSize +1
}

const A = [1, 2, 3, 5];

console.log(firstMissingPositive(A));


var firstMissingPositive2 = function(nums) {
    var swap = function(i, j) {
        var tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    };
        
    for (let i = 0; i < nums.length; i++) {
        while (0 < nums[i] && nums[i] - 1 < nums.length
            && nums[i] != i + 1
            && nums[i] != nums[nums[i] - 1]) {
        swap(i, nums[i] - 1);
            }
        }
        
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != i + 1) {
            return i + 1;
        }
    }
    return nums.length + 1; 
};


console.log("Version 2")

const B = [-2, -3, -5];
const C = [1, 3, 2];
const D = [-1, -3];
const E = [3, 1, 1];
console.log(`${A}  => ${firstMissingPositive2(A)}`);
console.log(`${B}  => ${firstMissingPositive2(B)}`);
console.log(`${C}  => ${firstMissingPositive2(C)}`);
console.log(`${D}  => ${firstMissingPositive2(D)}`);
console.log(`${E}  => ${firstMissingPositive2(E)}`);


const firstMissingPositive3 = function(A) {

    let sortedArray = A.sort(function(a,b){return a-b})
        
    // console.log(`Inside 3: ${sortedArray}`);

    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] != i + 1) {
            return i + 1;
            }
        }
        return sortedArray.length + 1;
    };

console.log("Version 3");
console.log(`${A}   => ${firstMissingPositive3(A)}`);
console.log(`${B}   => ${firstMissingPositive3(B)}`);
console.log(`${C}   => ${firstMissingPositive3(C)}`);
console.log(`${D}   => ${firstMissingPositive3(D)}`);
console.log(`${E}   => ${firstMissingPositive3(E)}`);
