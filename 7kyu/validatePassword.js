// Your goal for this kata:
// You must make sure all the passwords are valid, there will be two functions: signIn() and logIn(). signIn() will make a new password. logIn() will make sure that the password given is valid.
// Example:
// Let us say that someone signed in to codewars and their password is "cracker".
// NOTE: The password will ONLY be a string.
// signIn("cracker");

// Now when that someone does logIn("cracker") it should return true.
// logIn("cracker");

// var logIn = function() {
//   // code
//   return true;
// }

// // But if that someone does another password it should return false.
// logIn("goat");

// var logIn = function() {
//   // code
//   return false;
// }
//---------------------------------------------------------------

var passwords = [];

var signIn = function(newPassword) {
  passwords.push(newPassword);
  console.log(passwords)
};

var logIn = function(password) {
    for (var i = 0; i < passwords.length; i++) {
        return passwords.includes(password) ? true : false
    };
}

var doug = signIn("letsgo")
var kenz = signIn("sunny")

console.log(logIn("letsgo")) //true
console.log(logIn("sunny")) //false

