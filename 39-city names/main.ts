// Q39:City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value
// that’s returned?

//Answer 39:
// return function:
let city_country=(city: string, country: string): string =>
    {
        return `"${city}" is in "${country}"`
    }
    //calling functions three times with different arguments:
    console.log(city_country("Islamabad", "Pakistan"));
    console.log(city_country("Tokyo", "Japan"));
    console.log(city_country("Jeddah", "Saudia Arabia"));