// Given an array a of n integers and a number d perform d left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.
// I: array of integers, number of rotations
// O: rotated array
// C: number of integers in array > 1 and < 10,000; number of rotations > 1 and < number of integers; time complexity should be linear
// E: none

function rotLeft(a, d) {
    // iterate over array d number of times
    for (let i = 0; i < d; i++) {
        // shift and push each time
        let temp = a.shift();
        a.push(temp);
    }
    // return mutated array
    return a;
}

const test = [1, 2, 3, 4, 5]

console.log(rotLeft(test, 4));