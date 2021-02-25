/*
The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
*/

Array.prototype.myIncludes = function(valToFind, fromIndex = 0){
    if(fromIndex >= this.length){ //invalid fromIndex
        return false;
    }
    if(fromIndex < 0){ //negative numbers
        fromIndex = this.length + fromIndex; //calculate fromIndex
        //iterate through the array
        for(let i = fromIndex ; i <this.length; i++){
            if(this[i] === valToFind){ 
                return true; //found
            }
        }
    }
    else{ //positive numbers
        //iterate through the array
        for(let i = fromIndex ; i < this.length; i++){
            if(this[i] === valToFind){ 
                return true; //found
            }
        }
    }
    return false; //not found
};

const array1 = [1, 2, 3];
console.log(array1.myIncludes(2));         // true

const pets = ['cat', 'dog', 'bat'];
console.log(pets.myIncludes('cat'));       // true
console.log(pets.myIncludes('at'));        // false

console.log([1, 2, 3].myIncludes(2));      // true
console.log([1, 2, 3].myIncludes(4));      // false
console.log([1, 2, 3].myIncludes(3, 3));   // false
console.log([1, 2, 3].myIncludes(3, -1));  // true

let arr = ['a', 'b', 'c']
console.log(arr.myIncludes('c', 3));       // false
console.log(arr.myIncludes('c', 100));     // false
console.log(arr.myIncludes('a', -100));    // true
console.log(arr.myIncludes('b', -100));    // true
console.log(arr.myIncludes('c', -100));    // true
console.log(arr.myIncludes('a', -2));      // false