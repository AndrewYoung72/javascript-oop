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