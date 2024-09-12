// Q18: Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its
// order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been
// changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that
// its order has changed.

//Answer 18:
// Original Order:
let locations = ["Dubai","Qutar","Itali","Saidia arab","Canada"]
console.log("\n")
// Original Order:
console.log("Original Order: ",locations);
// Alphabetical Order:
let alpha =[...locations].sort();
console.log("\nAlphabetical Order: ",alpha);
// Original Order:
console.log("\nOriginal Order: ",locations);
// Reversed Alphabetical Order:
let revAlpha = [...locations].sort().reverse();
console.log("\nReversed Alphabetical Order: ",revAlpha);
// Original Order:
console.log("\nOriginal Order: ",locations);
//Reversing Original Order:
console.log("\nReversing Original Order: ",locations.reverse());
// Original Order:
console.log("\nOriginal Order: ",locations.reverse());
// Alphabetical Original Order:
console.log("\nAlphabetical Original Order: ",locations.sort());
// Reversing Original Alphabetical Order:
console.log("\nReversing Original Alphabetical Order: ",locations.reverse());