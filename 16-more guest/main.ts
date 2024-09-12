// Q16:More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing
// people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list?

// Answer 16:
let guest_list = ["Aftab","Hamzah","Faraz"];
//Iterating guest list and inviting guest on a bigger dinner table:
console.log("\n")
console.log("Original Guest List:",guest_list)

//Adding new guest to the beginning of array:
guest_list.unshift("Ameen Alam");
console.log(`\nAdding New Guest "Ameen Alam" To The Beginning Of Array:\n${guest_list}\n`);

//Adding new guest to the middle of array:
guest_list.splice(2,0,"Sir Zia");
console.log(`Adding New Guest "Sir Zia" To The Middle Of Array:\n${guest_list}\n`);

//Adding new guest to the end of array:
guest_list.push("Sir Daniyal Nagori");
console.log(`Adding New Guest "Sir Daniyal Nagori" To The End Of Array:\n${guest_list}\n`);
//printing new invition for each person:
console.log("Printing Invitation For Each Guest In The List:")
guest_list.forEach(guest => {console.log(`Hi ${guest},i've found a bigger dinner table!,You are invited to
dinner tonight.`)})
