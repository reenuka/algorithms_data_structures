// Given a 6 x 6 2D array, calculate the greatest sum of an hourglass formation of numbers.

function hourglassSum (arr) {
    // declare largest sum storage variable
    let largestSum;
    // iterate over first four rows of array
    for (let i = 1; i < 5; i++) {
        for (let j = 1; j < 5; j++) {
            // calculate sum of i and hourglass numbers by relation
            let sum = arr[i][j] + arr[i-1][j-1] + arr[i+1][j+1] + arr[i-1][j] + arr[i-1][j+1] + arr[i+1][j] + arr[i+1][j-1];
            // if sum is greater than largest sum
            if (sum > largestSum || largestSum === undefined) {
                // set largest sum to sum
                largestSum = sum;
            }
            // else continue
        }
    }
    // return largest sum
    return largestSum;
}

const test = [
    [-1, -1, 0, -9, -2, -2],
    [-2, -1, -6, -8, -2, -5],
    [-1, -1, -1, -2, -3, -4], 
    [-1, -9, -2, -4, -4, -5],
    [-7, -3, -3, -2, -9, -9],
    [-1, -3, -1, -2]
]

console.log(hourglassSum(test));