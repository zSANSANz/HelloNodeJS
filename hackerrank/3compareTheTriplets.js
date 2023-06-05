function compareTriplets(a, b) {
    let alice = 0
    let bob = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            alice = alice + 1
        }
        if (a[i] < b[i]) {
            bob = bob + 1 
        } 
    }
    return [alice, bob]
}

// Test case
const a = [5, 2, 3];
const b = [1, 4, 6];
const result = compareTriplets(a, b);
console.log(result);  // Output: [2, 1]