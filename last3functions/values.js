/* Object.values
Without using the native “Object.values()” method of JavaScript, compose 
a function titled “grabValues” that will take in an object and return all 
of the values of the key:value pairs of that object. */

Object.grabValue= function(arr) 
{
    var valueforValue = [];
    for (var Value in arr) 
    {
        valueforValue.push(Value);
    }
    //console.log(valueforkey);
    return valueforValue;
}

//Testing
const obj = { foo: 'bar', baz: 42 };

console.log(Object.values(obj)); // ['bar', 42]