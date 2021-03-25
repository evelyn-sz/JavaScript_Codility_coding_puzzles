function frogJump(x, y, d) {
    let distanceToCover = y - x;
    return Math.round((distanceToCover /= d) + 0.49)    
}

console.log(frogJump(10, 85, 30));
console.log(frogJump(2345, 98769997, 564));
console.log(frogJump(1000000, 11500000, 12000000));