function aVeryBigSum(ar) {
    // Write your code here
    let bigSum = BigInt(0)
    
    for (let i = 0; i < ar.length; i++) {
        bigSum = BigInt(bigSum) + BigInt(ar[i])
    }
    
    return bigSum
}

// Example usage
const array = [1, 2, 3, 4, 10, 11];
const arrayBig = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

const result = aVeryBigSum(array);
console.log(result);  // Output: 31


const resultBig = aVeryBigSum(arrayBig);
console.log(resultBig);  // Output: 