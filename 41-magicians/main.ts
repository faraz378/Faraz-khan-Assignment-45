// Q41: Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.?

// Answer 41:
let magicians_names = ["\nHarry Potter","Jaadugar","Maleficent"]
// writing function:
let show_magicians = (magic:string[]): void =>
{
    for(let i of magic){console.log(i)}
}
// calling function:
show_magicians(magicians_names)