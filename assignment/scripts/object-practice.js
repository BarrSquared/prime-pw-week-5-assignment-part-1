console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const meObj = {
  firstName: 'Russell',
  lastName: 'Barr',
  hasSiblings: true,
  shoeCount: 4,
  favThreeFoods: ['sushi', 'tacos', 'tikka masala']
  // TODO - add properties here
};
console.log('A little about me:', meObj);

/* 2. Accessing object properties.
  - Create a variable called fullName
  - Use the firstName & lastName properties of the object you
    created above to set its value.
  - Console.log fullName
*/
//creating vars for fullName var
//comment; created fullName var
let fName = meObj.firstName;
let lName = meObj.lastName;
let fullName = (fName + ' ' + lName)
console.log(fullName);



/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food
*/
//comment;fav food, first & last
console.log('My first favorite food is ' + meObj['favThreeFoods'][0]);
console.log('My third favorite food is ' + meObj['favThreeFoods'][2]);

/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count.
*/
//comment; updated property of object shoeCount
console.log('My current shoe count is: ' + meObj['shoeCount']);
meObj['shoeCount'] = meObj['shoeCount'] + 1;
console.log('My updated shoe count is: ' + meObj['shoeCount']);


/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
