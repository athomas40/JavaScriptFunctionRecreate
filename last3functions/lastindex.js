/* lastIndexOf()
Without using the native “Array.prototype.lastIndexOf” method of JavaScript,
compose a function titled “myLastIndexOf” that will take in an array of 
elements and returns the index of the last encounter of a target element 
(if it is found) or -1 if that element does not exist within the input array. */

Array.prototype.myLastIndexOf = function(valToFind, fromIndex)
{
    if(fromIndex == null)
    { 
        fromIndex = this.length - 1;
    }
    else if(fromIndex < 0) 
    {
        fromIndex = this.length + fromIndex;
    }    
    for(let i = fromIndex; i>= 0; i--)
        {
            if(this[i] === valToFind)
            {
                return i; //found
            }
        }
    return -1; //not found
}

//Testing

var array = [2, 5, 9, 2, 2];
console.log(array.myLastIndexOf(2)); // 4
console.log(array.myLastIndexOf(7)); // -1
console.log(array.myLastIndexOf(2, 3)) //3
console.log(array.myLastIndexOf(2, 2)) //0
console.log(array.myLastIndexOf(2, -2)) //3
console.log(array.myLastIndexOf(2, -1)) //4
console.log(array.myLastIndexOf(2, 4)) //4