"use strict";
// Q26: Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
// write an if-else chain.
// • If the alien’s color is green, print a statement that the player
//just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block?
//Answer 26:
console.log("\n");
// Version 1:
let alien_color = "green";
if (alien_color == "green") {
    console.log("You Just Earned 5 Points For Shooting The Green Alien \n");
}
else {
    console.log("You Just Earned 10 Points For Shooting The Blue Alien");
}
;
// Version 2:
let alien_color1 = "yellow";
if (alien_color1 == "red") {
    console.log("You Just Earned 5 Points For Shooting The Yellow Alien");
}
else {
    console.log("You Just Earned 10 Points For Shooting The Red Alien");
}
;
