"use strict";
// Q31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed?
// Answer 31:
let users2 = ["admin", "Faraz", "Sir Zia", "Sir Daniyal", "Miss Ariba"];
// Empty list:
users2 = [];
console.log(users2.length);
// if-else:
if (users2.length == 0) {
    console.log("We need to find somme users!", "\nEmpty List:", users2);
}
else {
    console.log(`We have ${users2.length} user/users`);
}
