//MAP

/*
"myMap" will take in an array of elements and creates a new array populated with the results of calling
a provided function on every element in the calling array.

call back is invoked with three arguments:
    the value of the element, the index of the element, the Arry object being traversed
*/
Array.prototype.myMap = function(secondFunction, param) {
    let secondArray = [];
    //calls function on each element and adds result to secondArray
    for (let i = 0; i < this.length; i++) {
        let value = secondFunction(this[i], i, this);
        secondArray.push(value);
    }
    return secondArray;
};

//Testing
const arr = [1, 2, 3, 4];

const map1 = arr.myMap(x => x * x);
console.log(map1);
