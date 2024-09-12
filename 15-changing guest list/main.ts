// Q15: Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite:
// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still
// in your list?

// Answer 15:
let guest_list = ["Aftab","Hamzah","Javed"];

//iterating and printing original list:
console.log("\n-Iterating And Printing Original List: ")
guest_list.map((items)=>console.log(`Dear '${items}' you are invited to dinner tonight.`));
console.log(`\n-Removing Guest From List: \n-Unfortunately our guest '${guest_list[2]}' can't come tonight\n`)

//modifying list:
console.log(`-Modifying List: `)
// extra line: guest_list[guest_list.indexOf(guest_list[2])] = "Umair"
guest_list[guest_list.indexOf("Javed")] = "Umair"
console.log(`We are inviting new guest '${guest_list[2]}'\n`)

//iterating list and printing modified list:
console.log(`-Iterating And Printing Modified List: `)
guest_list.forEach(i => {console.log(`Dear '${i}' you are invited to dinner tonight.`)})