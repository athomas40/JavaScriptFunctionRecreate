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
const arr = [1, 2, 3, 4, 5];

function isEvenNumber(number) {
    return (number % 2 == 0);
}

//apply callback to each element in arr
const cb = (x) => {
    isEvenNumber(x);
};


const print = (x) => {
    console.log(x);
};

// arr.mySome(cb);
console.log(arr.mySome(cb));
// print("--");
// arr.mySome(print);