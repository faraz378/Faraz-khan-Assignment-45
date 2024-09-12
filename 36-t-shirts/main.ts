// Q36: T-Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt. The function should print
// a sentence summarizing the size of the shirt and the message printed on it.
// Call the function?

// Answer 36:
//  writing function:
let make_shirt = (size :string , Message: string ):void =>
    {console.log(`size:${size}, Message: '${Message}'`);}
    
    // calling function:
    make_shirt("Large ","Future Is Now")