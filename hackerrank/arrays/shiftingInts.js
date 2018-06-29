// It's New Year's Day and everyone's in line for the Wonderland rollercoaster ride!
// There are a number of people queued up, and each person wears a sticker indicating their initial position in the queue.Initial positions increment by from at the front of the line to at the back.
// Any person in the queue can bribe the person directly in front of them to swap positions.If two people swap positions, they still wear the same sticker denoting their original places in line.One person can bribe at most two others.
// For example, if n = 8 and Person 5 bribes Person 4, the queue will look like this: 1, 2, 3, 5, 4, 6, 7, 8.
// Fascinated by this chaotic queue, you decide you must know the minimum number of bribes that took place to get the queue into its current state!

// I: q, an array of integers
// O: number of bribes needed to get the queue into its final state
// C: a person can only bribe twice
// E: invalid number of bribes (shifts) => print "Too chaotic"

function minimumBribes(q) {

    // --- ATTEMPT 1 ---
    // // declare bribe counting var
    // let bribes = 0;
    // // iterate over queue
    // for (let i = 0; i < q.length; i++) {
    //     // if difference between number and its index is greater than 3
    //     if (Math.abs(q[i] - i) > 3) {
    //         // return "Too chaotic"
    //         return 'Too chaotic';
    //     } else {
    //         // otherwise increment bribes by difference
    //         let difference = q[i] - (i + 1);
    //         bribes += (difference > 0 ) ? difference : 0;
    //     }
    // }
    // // return bribes
    // return bribes;


    // --- ATTEMPT 2 ---
    // declare bribe counting var
    let bribes;
    // iterate over queue
    for (let i = 0; i < q.length; i++) {
        // if difference between number and its index is greater than 3
        if (Math.abs(q[i] - i) > 3) {
            // return "Too chaotic"
            return 'Too chaotic';
        } else {
            // ????????????????????????????????????????????
        }
    }

    return bribes;
}

const test = [1, 2, 5, 3, 7, 8, 6, 4];

console.log(minimumBribes(test));