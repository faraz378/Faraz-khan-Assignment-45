// Q29: Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
//if statements that check for certain fruits in your array...
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array.
//If the fruit is in your array, the if block should print a statement,such as You really like bananas! ?

// Answer 29:
let favorite_fruits = ["Mangoes","Pineapples","Oranges"]

// apples is not include in a list:
    if (favorite_fruits.includes("apple"))
    {console.log("I really like apple")}

// mangoes is included in the list:
    if (favorite_fruits.includes("mangoes"))
    {console.log("I really like mangoes")}

// oranges is not include in a list:
    if (favorite_fruits.includes("oranges"))
    {console.log("I really like oranges")}

// pineapple is not include in a list:
    if (favorite_fruits.includes("pineapple"))
    {console.log("I really like pineapple")}
    
// pomegranates is included in the list:
    if (favorite_fruits.includes("pomegranates"))
    {console.log("I really like pomegranates")}