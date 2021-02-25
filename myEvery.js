// every()

/*
The every() method tests whether all elements in the array pass the test implemented by the provided function.
It returns a Boolean value.
*/


Array.prototype.myEvery = function(callback) {
    let allTrue = true;

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this) == false) {
            allTrue = false;
            return allTrue;
        }
    }

    return allTrue;
}

// Testing
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 40, 16, 90, 78];
const arr3 = [-20, -2, 8, 56];

function isEvenNumber(number) {
    return (number % 2 == 0);
}

const print = (x) => {
  
    console.log(x);
};

console.log(arr1.myEvery(isEvenNumber));
console.log(arr2.myEvery(isEvenNumber));
console.log(arr3.myEvery(isEvenNumber));
// print("--");
// arr2.myEvery(print);