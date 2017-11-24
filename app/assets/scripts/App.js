var Toto = require('./modules/Person.js');
//
// function Person(fullName, favColor) {
//     this.name = fullName;
//     this.favoriteColor  = favColor;
//     this.greet = () => {
//         console.log("Hello, my name is " + this.name +
//             " and my favorite color is " + this.favoriteColor + ".");
//     }
// }

var john = new Toto("John Doe", "blue");
john.greet();
var  jane = new Toto("Jane Smith", "green");
jane.greet();
