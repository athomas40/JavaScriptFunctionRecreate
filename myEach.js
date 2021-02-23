//FOR EACH

//“myEach” will take in an array of elements and execute any callback function on each of those elements.


Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
    return undefined;
};

//Testing
const arr = [1, 2, 3, 4];

function isOdddNumber(number) {
    return number % 2;
}

//apply callback to each element in arr
const cb = (x) => {
    console.log(isOdddNumber(x));
};

const print = (x) => {
    console.log(x);
};

arr.myEach(cb);
print("--");
arr.myEach(print);