"use strict";
// Q40: Album: Write a function called make_album() that builds a Object
// describing a music album. The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of
// information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album?
// writing album function:
let make_album = (artist, album, tracks) => {
    let albumReturn = {
        artist: artist,
        album: album,
    };
    if (tracks !== undefined) {
        albumReturn.track = tracks;
    }
    return albumReturn;
};
// calling album function 3 times:
console.log(make_album("Amjad Sabri", "Sabz Gmbad", 7));
console.log(make_album("Atif Aslam", "Taj Dar-e-Haram"));
console.log(make_album("Sami Yosuf", "Wo Tanha Kon hai", 1));
