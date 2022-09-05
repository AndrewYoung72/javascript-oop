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

let userArray = [];

const addUser = document.querySelector(".add-user");
const newUser = new User(addUser.email, addUser.name);
addUser.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = addUser.querySelector("#email", "text").value;
  const name = addUser.querySelector("#name", "text").value;
  userArray.push(newUser);
  console.log(userArray);
  e.target.reset();
  

  //create element
const li = document.createElement("li")
const userEmail = document.createElement("span");
const userName = document.createElement("span");

userEmail.textContent = email;
userName.textContent = name;

li.appendChild(userEmail);
li.appendChild(userName);
list.appendChild(li);

userName.classList = "name";
userEmail.classList = "email"

});

const users = document.querySelector(".list li .name")
//Filtering users 
const searchBar = document.querySelector(".search-user");//grabs the form id
searchBar.addEventListener("keyup", function(e) {
  const term = e.target.value.toLowerCase();
  names.forEach(function(user) {
    const name = user.name;
    if(name.toLowerCase().indexOf(term) != -1) {
        user.style.display = "block";
    } else {
      user.style.display = "none";
    }
  })
})



// the "new" keyword
// creates a bew empty object {}
// sets the value of "this" to be the new empty object
// calls the constructor method

