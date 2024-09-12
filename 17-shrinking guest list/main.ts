// Q17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the
//  dinner, and you have space for only two guests:
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can
// invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time
// you pop a name from your list, print a message to that person letting them know you’re sorry you can’t
// invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to
// make sure you actually have an empty list at the end of your program?

// Answer 17:
console.log('\n"Unfortunately i can only invite two people for dinner tonight."\n');
let guest_list = ["Abdullah","Maaz","Zain","Fahad","Umair",];
// popping last 3 guests in the list:
let pop1 = guest_list.pop();
let pop2 = guest_list.pop();
let pop3 = guest_list.pop();
console.log(`Sorry I can't invite you '${pop1}' for dinner tonight, due to lack of space.`);
console.log(`Sorry I can't invite you '${pop2}' for dinner tonight, due to lack of space.`);
console.log(`Sorry I can't invite you '${pop3}' for dinner tonight, due to lack of space.\n`);
// sending invitation to remaining 2 guest in the list:
for(let guest of guest_list)
{console.log(`${guest} your still invited for dinner tonight`)}
// removing remaining guests in the list to make it empty:
guest_list.pop();
guest_list.pop();
console.log("\nEmpty list:",guest_list);
