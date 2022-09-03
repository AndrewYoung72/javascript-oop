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
const list = document.querySelector(".list ul");

const addUser = document.querySelector("#add-user");
addUser.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = addUser.querySelector("#email", "text").value;
  const name = addUser.querySelector("#name", "text").value;
  console.log(email, name);

  //create element
const li = document.createElement("li")
const userEmail = document.createElement("span");
const userName = document.createElement("span");

userEmail.textContent = email;
userName.textContent = name;

li.appendChild(userEmail);
li.appendChild(userName);
list.appendChild(li)

});




// the "new" keyword
// creates a bew empty object {}
// sets the value of "this" to be the new empty object
// calls the constructor method
Bob.login();
Bob.logout();
