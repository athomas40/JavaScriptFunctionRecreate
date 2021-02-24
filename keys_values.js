Object.keys()

//Without using the native “Object.keys()” method of JavaScript, compose a function titled “grabKeys” that will take in an 
//object and return all of the keys of the key:value pairs of that object.

let objects= {a:'54', b: 'ki', c: 'so'};
for (var key in objects) 
{
    var valueforkey = objects[key];
    console.log(valueforkey);
}
