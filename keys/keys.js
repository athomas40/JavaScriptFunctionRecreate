//Without using the native “Object.keys()” method of JavaScript, compose a function titled “grabKeys” that will take in an 
//object and return all of the keys of the key:value pairs of that object.

const arr1 = [1,2,3];

Array.prototype.grabKeys= function(callback) 
{
    for (var key in arr1) 
    {
        var valueforkey = arr1[key];
        
    }
    console.log(valueforkey);
}

console.log(arr1.grabKeys);