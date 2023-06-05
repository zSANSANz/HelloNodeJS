
function diagonalDifference(arr) {
    // Write your code here
    let difference = 0
    let primaryDiagonal = 0
    let secondaryDiagonal = 0
    
    for (let i = 0; i < arr.length; i++) {
           primaryDiagonal = primaryDiagonal + arr[i][i]
           secondaryDiagonal += arr[i][arr.length - 1 - i];
           console.log(primaryDiagonal, secondaryDiagonal)
    }

    return Math.abs(primaryDiagonal - secondaryDiagonal)
}

// Example test case
const matrix = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];

console.log(diagonalDifference(matrix)); // Output: 0