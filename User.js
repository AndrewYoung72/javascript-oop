export default class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }

  login() {
    console.log(this.email, "just logged in");
  }
  logout() {
    console.log(this.name, "just dropped one and walked away");
  }
}
let Bob = new User("Bob@bob.com", "Bob", "heresbob");

//Display user

const displayUser = document.querySelector(".container");
displayUser.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = displayUser.querySelector("#email", "text").value;
  const name = displayUser.querySelector("#name", "text").value;
  console.log(email, name);
});

//create element
const div = document.createElement("div")
const userEmail = document.createElement("span");
const userName = document.createElement("span");

userEmail.textContent = email;
userName.textContent = name;

div.appendChild(userEmail);
div.appendChild(userName);
displayUser.appendChild(div)


// the "new" keyword
// creates a bew empty object {}
// sets the value of "this" to be the new empty object
// calls the constructor method
Bob.login();
Bob.logout();
