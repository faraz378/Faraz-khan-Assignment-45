// Q42:Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.?

// Answer 42:
let magicians_name: string[] = ["\nHarry Potter","Jaadugar","Maleficent"]

// function 1:
function make_g1(magic_name: string[]): string[] {
    let g_magicians: string[] = [];
    for (let magic of magic_name) {g_magicians.push(`${magic} the Magicicans!`);}
    return g_magicians;
}
// function 2:
function show_magicians1(magi: string[]): void {
    for (let mag of magi) 
    {console.log(mag);}
}

// storing function 1 in a variable:
let g_magicians: string[] = make_g1(magicians_name);

// calling functions:
console.log("\nOriginal Names:")
show_magicians1(magicians_name);

console.log("\nNames Modified:")
show_magicians1(g_magicians);