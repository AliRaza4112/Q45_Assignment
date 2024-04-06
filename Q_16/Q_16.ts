// // More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
// //
let Guests: string[] = ["Imtiaz", "Ameer", "Asad"];
//   index               0        1       2
//first of array
Guests.unshift("Jahan"); // begining of array add
Guests.splice(2, 0, "john"); //add to middle of array
Guests.push("dell"); //add to end of array
//       2= index of array , 0 = delete the object , add
// jahn , imtiaz, john , ameer, asad
//  0       1        2     3      4
for (let i of Guests) {
  console.log(`Dear ${i} would you like to join me for dinner.`);
}
