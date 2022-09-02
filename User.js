class User {
  constructor(email, name, password) {
    this.email = email;
    this.name = name;
    this.password = password;
  }

  login() {
    console.log(this.email, "just logged in")
  }
  logout() {
    console.log(this.name, "just dropped one and walked away")
  }
}
 let userOne = new User("Bob@bob.com", "Bob", "heresbob")

module.exports = User;


// the "new" keyword
// creates a bew empty object {}
// sets the value of "this" to be the new empty object
// calls the constructor method
userOne.login();
userOne.logout();