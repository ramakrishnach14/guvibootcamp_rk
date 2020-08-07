//TypeError: can't assign to property "x" on "y": not an object

//The JavaScript strict mode exception "can't assign to property" occurs when attempting 
//to create a property on primitive value such as a symbol, a string, a number or a boolean. 
//Primitive values cannot hold any property.

//Message

//TypeError: Cannot create property 'x' on {y} (Chrome)
//TypeError: can't assign to property "x" on {y}: not an object (Firefox)

//Error Type : TypeError



// What went wrong?

// In Strict_mode, a TypeError is raised when attempting to 
// create a property on primitive value such as a symbol, a string, a number or a boolean. Primitive values cannot hold any property.

// The problem might be that an unexpected value is flowing at an unexpected place, or that an object 
// variant of a String or a Number is expected.

//Example 

//invalid cases
'use strict';

var foo = "my string";
// The following line does nothing if not in strict mode.
foo.bar = {}; // TypeError: can't assign to property "bar" on "my string": not an object

//Fixing the error

//Either fix the code to prevent the primitive from being used in such places, 
//or fix the issue is to create the object equivalent Object.

'use strict';

var foo = new String("my string");
foo.bar = {};