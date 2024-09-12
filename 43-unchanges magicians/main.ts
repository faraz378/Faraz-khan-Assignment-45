// Q43: Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name?

// Answer 43:
let magicians1: string[] = ["\nHarry Potter","Jaadugar","Maleficent"]
//fnction 1:
function make_g2(magicians1: string[]): string[]
{
    let g_m1: string[] = [];
    for (let magician of magicians1) 
    {g_m1.push(`${magician} the Magicians`);}
    return g_m1;
}
// function 2:
function show_magicians2(mag1: string[]): void
{
    for (let ma of mag1) 
    {console.log(ma);}
}
let g1: string[] = make_g2([...magicians1]);
// calling functions:
console.log("Original magicians:");
show_magicians2(magicians1);

console.log("\nMagicians after adding 'the Magicians':");
show_magicians2(g1);

console.log("\nOriginal magicians:");
show_magicians2(magicians1);