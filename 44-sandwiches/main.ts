// Q44:Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time?

// Answer 44:
// writing function:
function sandwich(order: string[]):void
{
       if (order.length > 0)
{
        console.log("item list :")
        order.forEach((item, i) => {console.log(`${i + 1}.${item}`);})
}
}
//calling function 3 times:
sandwich(["cucumber", "hot sauce", "mustard paste\n"]);
sandwich(["pepper", "cheese\n"]);
sandwich(["ketchup", "hot spices", "bbq sauce", "boiled egg\n"]);