// Q37: Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message?

//Answer 37:
// writing  fuunction:
function make_shirt(size:string="Large", message:string = "I love Typescript"):string
{
    console.log(`\nSize:${size},Title:${message}`);

    return `Size:${size},Title:${message} \n`
}
// calling function 3 times wit different arguments:
make_shirt()
make_shirt("Medium")
make_shirt("Small","I am a programmer")