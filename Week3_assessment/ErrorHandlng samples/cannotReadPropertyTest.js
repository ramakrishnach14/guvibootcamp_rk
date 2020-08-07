//uncaught type error : cannot read property
//The JavaScript exception "can't access property" occurs when property access was operated on undefined or null values.
//ErrorType : TypeError
//The property access was operated on undefined or null value

//invalid cases

// undefined and null cases on which the substring method won't work
var foo = undefined;
foo.substring(1); // TypeError: x is undefined, can't access property "substring" of it

var foo = null;
foo.substring(1); // TypeError: x is null, can't access property "substring" of it


//fixing the issue

// if (typeof foo !== 'undefined') {
//   // Now we know that foo is defined, we are good to go.
// }