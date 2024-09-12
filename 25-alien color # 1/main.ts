// Q25: Alien Colors #1: Imagine an alien was just shot down in a game. Create a
// variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print
// a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that
// fails. (The version that fails will have no output.)?

// Answer 25:

// Passed Version:
console.log("\n")
let alien_color = "green";
if (alien_color == "green"){console.log("You Just Earned 5 Points For Shooting Green Alien!")};

// Failed Version:
let alien_color1 = "red";
if (alien_color1 == "yellow"){console.log("You Just Earned 10 Points")};
console.log("Version failed: No output");