// You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still
// in your list.
let Guests:string[]=["Imtiaz", "Ameer","Asad"]

let unableToAttend="Asad";
console.log(`${unableToAttend} He is not come in the dinner`);
let name1="Ubaid";
Guests[Guests.indexOf(unableToAttend)]=name1

// Guests.pop();// Asad is not come in the party 
// Guests.push("Ubaid")
for(let name of Guests){
console.log(`${name} is still Invited`);}

