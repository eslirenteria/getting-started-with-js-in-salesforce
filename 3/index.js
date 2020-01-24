function overloaded(someVariable) {
  if(typeof someVariable == 'number') console.log('it is a number');
  if(typeof someVariable == 'string') console.log('it is a string');
}
overloaded(1);
overloaded('s');
// array
var myArray = ['a', 'b', 'c'];
for(b in myArray) console.log(b);
for(b in myArray) console.log(myArray[b]);

myArray.description = 'Description test';
for(b in myArray) console.log(b);
for(b in myArray) console.log(myArray[b]);
