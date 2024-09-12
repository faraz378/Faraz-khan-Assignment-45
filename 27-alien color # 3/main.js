"use strict";
// Q27: Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate
// color alien?
// Answer 27:
console.log("\n");
let alien_1 = "green";
// Shooting Green Alien:
if (alien_1 == "green") {
    console.log("You Just Earned 5 Points For Shooting The Green Alien \n");
}
else if (alien_1 == "yellow") {
    console.log("You Just Earned 10 Points For Shooting The Yellow Alien \n");
}
else {
    console.log("You Just Earned 15 Points For Shooting The Red Alien");
}
;
// Shooting Yellow Alien:
alien_1 = "yellow";
if (alien_1 == "green") {
    console.log("You Just Earned 5 Points For Shooting The Green Alien \n");
}
else if (alien_1 == "yellow") {
    console.log("You Just Earned 10 Points For Shooting The Yellow Alien \n");
}
else {
    console.log("You Just Earned 15 Points For Shooting The Red Alien \n");
}
;
// Shooting Red Alien:
alien_1 = "red";
if (alien_1 == "green") {
    console.log("You Just Earned 5 Points For Shooting The Green Alien \n");
}
else if (alien_1 == "yellow") {
    console.log("You Just Earned 10 Points For Shooting The Yellow Alien");
}
else {
    console.log("You Just Earned 15 Points For Shooting The Red Alien");
}
;
