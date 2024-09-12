// Q30: Hello Admin: Make a array of five or more usernames, including the name 'admin'.
// Imagine you are writingcode that will print a greeting to each user after they log in to a website.
// Loop through the array,and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a 
// status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again?

// Answer 30:
let users = ["admin","Faraz","Sir Zia","Sir Daniyal","Miss Ariba"]
// using for loop for iteration:
for(let i = 0; i < users.length; i++)
{
    let user = users[i]
    
    if (user == "admin")
    {console.log(`\nHello ${user} would you like to see a status report?`)}

    else(console.log(`Hi ${user}, thank you for logging in again`))
}