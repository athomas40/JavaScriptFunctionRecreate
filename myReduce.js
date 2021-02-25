// reduce()

/*
The reduce() method executes a reducer function (that you provide)
on each element of the array, resulting in single output value.
*/


Array.prototype.myReduce = function(callback) {
    let accumulator = this[0];

    for (let i = 1; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
}

// Testing
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 40, 16, 90, 78];
const arr3 = [-5, 12, 16, -25, -9]

function reducer(accumulator, currentValue) {
    return accumulator + currentValue;
}

console.log(arr1.myReduce(reducer)); // return 15
console.log(arr2.myReduce(reducer)); // return 226
console.log(arr3.myReduce(reducer)); // return -11