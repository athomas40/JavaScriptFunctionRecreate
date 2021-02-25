/*
The push() method adds one or more elements to the end of an array and returns the new length of the array.
*/

Array.prototype.myPush = function(...elementN){
    let arrSize = this.length;
    let paramSize = elementN.length;
    var isArr = Array.isArray(elementN[0]); //determines if the passed in object is an array
    if(isArr == true){ //if the passed in object is an array
        let nestedArrSize = elementN[0].length; //get the size of the array
        for(let i = 0; i< nestedArrSize;i++){
            this[arrSize] = elementN[0][i]; //add the elements of the passed in array to 'this' array
            arrSize++; //increase size
        }
    }
    else{ //if the passed in object is not an array
        //add the elements to 'this' array
        for(let i = 0; i< paramSize;i++){
            this[arrSize] = elementN[i];
            arrSize++;
        }
    }
    this.size = arrSize;
    return arrSize; //return size
};

//Testing
const nums = [1,2,3,4,5,6];
const test = [7,8,9];
const nums2 = [1,2,3,4,5,6];
const numstotal = nums.myPush(...test); //use spread syntax to iterate through the array being passed in
const numstotal2 = nums2.myPush(test); //pass in reg array
console.log(numstotal);
console.log(numstotal2);

const animals = ['pigs', 'goats', 'sheep'];
const count = animals.myPush('cows');
const count2 = animals.myPush('chickens', 'cats', 'dogs');
console.log(count);
console.log(count2);

let sports = ['soccer', 'baseball']
let total = sports.myPush('football', 'swimming')
console.log(total)  // ['soccer', 'baseball', 'football', 'swimming']
