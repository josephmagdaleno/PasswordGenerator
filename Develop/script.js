//list of all the characters i want to use in the password
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+[]<>?.";

//checking to see if they work
console.log(uppercase);
console.log(lowercase);
console.log(numbers);
console.log(symbols);

//made a function to write the password onto the page
function getPassword() {
    var ul = document.getElementById("password");
    ul.innerHTML = "";
    var value = parseInt(document.generator.value = 1);
     {
    var p = document.createElement("p");
    p.textContent = generatePassword();
    ul.appendChild(p);
    }
};
// made a function to see what the user had selected to choose from.
function generatePassword() {
     var chosen = "";
    //if the uppercase is checked the password will contain uppercase letters.
    //could not figure out a way to tell the user they need to have something checked.
    //if nothing is selected it says undefined.
    if (document.generator.uppercase.checked) {
          chosen = chosen +uppercase;
    }
    if (document.generator.lowercase.checked) {
        chosen = chosen + lowercase;
    }
    if (document.generator.numbers.checked) {
        chosen = chosen + numbers;
    }
    if (document.generator.symbols.checked) {
        chosen = chosen + symbols;
    }
// function to see the length of the chosen password
    var password = "";
    var length = parseInt(document.generator.length.value);
    for (var i = 0; i < length; i++) {
        var random = Math.floor(Math.random() * chosen.length);
        password = password + chosen[random];
    }

     return password;
};