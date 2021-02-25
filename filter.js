//FILTER

/*
"myFilter" will take in an array of elements and creates a new array populated with all elements that pass the test
implemented by the provided function.

call back is invoked with three arguments:
    the value of the element, the index of the element, the Arry object being traversed
*/
Array.prototype.myFilter = function(secondFunction, param) {
    let secondArray = [];
    for (let i = 0; i < this.length; i++) {
        let value = secondFunction(this[i], i, this);
        //checks if element pass the test and adds to array if it does
        if (value == true) {
            secondArray.push(this[i]);
        }
    }
    return secondArray;
};

//Testing
const arr = [1, 2, 3, 4];
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const map1 = arr.myFilter(num => num > 2);
console.log(map1);

const result = words.filter(word => word.length > 6);
console.log(result);