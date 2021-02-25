/* Object.keys
Without using the native “Object.keys()” method of JavaScript, compose 
a function titled “grabKeys” that will take in an object and return all 
of the keys of the key:value pairs of that object. */

Object.grabKeys= function(arr) 
{
    var valueforkey = [];
    for (var key in arr) 
    {
        valueforkey.push(key);
    }
    //console.log(valueforkey);
    return valueforkey;
}

//Testing

const arr1 = { 0: 'a', 1: 'b', 2: 'c'};

console.log(Object.grabKeys(arr1));