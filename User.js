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
  displayUser() {
    const displayUser = document.querySelector("#container");
    displayUser.addEventListener("submit", function(e) {
      e.preventDefault();
      const user = displayUser.querySelector("input", "text").value;
      console.log(user);
    })
  }
}
let Bob = new User("Bob@bob.com", "Bob", "heresbob");

// the "new" keyword
// creates a bew empty object {}
// sets the value of "this" to be the new empty object
// calls the constructor method
Bob.login();
Bob.logout();