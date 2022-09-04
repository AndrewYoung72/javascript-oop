import Bob from "./user.js";

//Filtering users 
const searchBar = document.querySelector("#search-user");//grabs the form id
searchBar.addEventListener("keyup", function(e) {
  const term = e.target.value.toLowerCase();
  users.forEach(function(user) {
    const name = user.textContent;
    if(name.toLowerCase().indexOf(term) != -1) {
        user.style.display = "block";
    } else {
      user.style.display = "none";
    }
  })
})