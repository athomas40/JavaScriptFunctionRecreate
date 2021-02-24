// some() (aka any())

/*
“mySome” that will take in an array of elements and execute a callback function on each of those elements.

The some() method tests whether at least one element in the array passes the test implemented by the provided function. 
It returns a Boolean value.

*/


Array.prototype.mySome = function(callback) {
    let anyTrue = false;

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this) == true) {
            anyTrue = true;
            return anyTrue;
        }
    }

    return anyTrue;
}

// Testing
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 3, 7, 21, 33];
const arr3 = [-6, 15, 7];

function isEvenNumber(number) {
    return (number % 2 == 0);
}

const print = (x) => {
  
    console.log(x);
};

console.log(arr1.mySome(isEvenNumber));
console.log(arr2.mySome(isEvenNumber));
console.log(arr3.mySome(isEvenNumber));
// print("--");
// arr1.mySome(print);