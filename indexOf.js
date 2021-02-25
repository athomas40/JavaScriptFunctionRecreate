/*
The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
*/

Array.prototype.myIndexOf = function(valToFind, fromIndex = 0){
    if(fromIndex >= this.length){ //invalid fromIndex
        return false;
    }
    if(fromIndex < 0){ //negative number
        fromIndex = this.length + fromIndex; //calculate fromIndex
        //iterate through the array
        for(let i = fromIndex ; i <this.length; i++){
            if(this[i] === valToFind){
                return i; //found
            }
        }
    }
    else{ //positive numbers
        //iterate through the array
        for(let i = fromIndex ; i < this.length; i++){
            if(this[i] === valToFind){
                return i; //found
            }
        }
    }
    return -1; //not found
};

//Testing
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.myIndexOf('bison'));      //  1
console.log(beasts.myIndexOf('bison', 2));   //  4
console.log(beasts.myIndexOf('giraffe'));    //  -1

var array = [0, 2, 9, 9];
console.log(array.myIndexOf(2));             // 1
console.log(array.myIndexOf(7));             // -1
console.log(array.myIndexOf(9));             // 2
console.log(array.myIndexOf(9, 2));          // 2
console.log(array.myIndexOf(2, -1));         // -1
console.log(array.myIndexOf(2, -3));         // 1