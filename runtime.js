const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(largeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(largeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

// Insert:
// extraLargeArray: 672.2312 ms
// tinyArray: 42.8 μs
// smallArray: 63.9 μs
// mediumArray: 155 μs
// largeArray: 6.5395 ms

// Append:
// extraLargeArray: 2.9237 ms
// tinyArray: 103.4 μs
// smallArray: 197 μs
// mediumArray: 126.5 μs
// largeArray: 499.6 μs

// The way that this seems to work is that with smaller numbers, insert seems to be much more efficient, however the larger the array grows
// the longer inserting takes as it has to register every item in the array again rather than just adding it to the end with append.