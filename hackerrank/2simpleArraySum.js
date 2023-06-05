function simpleArraySum(ar) {
    // Write your code here
    let output = 0
    for (let i = 0; i<ar.length; i++) {
        output = output + ar[i]
    }
    
    return output
}

// Example usage
const array = [1, 2, 3, 4, 10, 11];
const result = simpleArraySum(array);
console.log(result);  // Output: 31