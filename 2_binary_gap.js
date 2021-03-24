// A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

function binaryGap(N) {
    
    var number = N;
    var binary = '';
    var counter = -1;
    var max = 0;
    while(number > 0) {
        var digit = number % 2;
        
        if(digit === 1) {
            if(counter > max) {
                max = counter;
            }
            counter = 0;
        } else if(counter >= 0) {
            counter++;
        }
        
        binary = '' + digit + binary;
        number = parseInt(number / 2);
    }
    
    return max;
}

// solution(9)
// console.log(solution(9))
// console.log(solution(529))
// console.log(solution(20))
// console.log(solution(15))
// console.log(solution(32))

// # For example, number 9 has binary representation 1001 and contains a binary gap of length 2. 
// # The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. 
// # The number 20 has binary representation 10100 and contains one binary gap of length 1. 
// # The number 15 has binary representation 1111 and has no binary gaps. 
// # The number 32 has binary representation 100000 and has no binary gaps.


// below, just converts decimal to binary
function dec2bin(dec) {
    return (dec >>> 0).toString(2);
  }

  console.log(dec2bin(9));
  console.log(dec2bin(529));
  console.log(dec2bin(20));
  console.log(dec2bin(15));
  console.log(dec2bin(32));


//   function binaryGap(dec) {
//       (dec >>> 0).toString(2)
//         .match(/(.)\1*/g)
//         .filter(item => item.includes(0))
//         .reduce( (a, b) => {
//                 return a.length > b.length ? a : b;
//             }
//         ).length
//   }

//   console.log("BINARY GAP")
//   console.log(binaryGap(9));
//   console.log(binaryGap(529));
//   console.log(binaryGap(20));
//   console.log(binaryGap(15));
//   console.log(binaryGap(32));
