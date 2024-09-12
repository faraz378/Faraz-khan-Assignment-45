"use strict";
// Q24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want 
// to try more comparisons, write more tests. Have at least one True and one False result for each 
// of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than,
//greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array ?
// Answer 24:
// Eqaulity & Non-equality Test:
let myCourse = "Gen AI";
console.log("Is myCourse == Gen AI? I predict true.");
console.log(myCourse == "Gen AI");
console.log("Is myCourse != Gen AI ? I predict False.");
console.log(myCourse != "Gen AI");
// Lowercase Test:
let myName = "FARAZ";
console.log("Is myName in lowercase == 'faraz'? I predict true");
console.log(myName.toLowerCase() == "faraz");
console.log("Is myName in lowercase == FARAZ ? I predict False.");
console.log(myName.toLowerCase() == "FARAZ");
// Numerical Test == != > < >= <=
let myNum = 7;
console.log("Is myNum == 7? I predict True");
console.log(myNum == 7);
console.log("Is myNum != 7? I predict False");
console.log(myNum != 7);
console.log("Is myNum > 5? I predict True");
console.log(myNum > 5);
console.log("Is myNum < 5? I predict False");
console.log(myNum < 5);
console.log("Is myNum <= 7? I predict True");
console.log(myNum <= 7);
console.log("Is myNum >= 12? I predict False");
console.log(myNum >= 12);
// And/Or operators:
let ten = 10;
console.log("Is ten > 5 or ten < 9? I predict True");
console.log(ten > 5 || ten < 9);
console.log("Is ten > 11 and ten < 4? I predict False");
console.log(ten > 11 && ten < 4);
//Checking existing and non-existing items in array:
let veg_list = ["potato", "garlic", "ginger", "onion"];
console.log("Arry", veg_list);
console.log("Is there a potato in the arry? I predict True");
console.log(veg_list.includes("potato"));
console.log("Is there a tomato in the arry? I predict False");
console.log(veg_list.includes("tomato"));
console.log("There is no potato in arry? I predict False");
console.log(!veg_list.includes("potato"));
