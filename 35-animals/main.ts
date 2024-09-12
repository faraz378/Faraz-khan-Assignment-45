// Q35: Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet! ?

// Answer 35:

let animals: string[]=["cat","parrot","dog"]
// printing list of animals:
console.log ("\nlist of animals:");
    for(let i = 0; i < animals.length; i++){console.log(i + 1,"-", animals[i]);}

console.log("\nStatements:")
// statement for dog:
    for(let animal of animals){if(animal == "dog"){console.log (`A ${animal} is a great pet.`);}
// statement for cat:
    else if (animal == "cat"){console.log (`${animal}s are adorable.`);}
// statement for parrot:
    else if (animal == "parrot"){console.log(`some ${animal}s repeats whatever we say.`)}}

// additional statement:
console.log("\nAdditional statement:\nAny of these animals would make a great pet!")